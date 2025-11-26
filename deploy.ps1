# ===============================
# deploy.ps1
# Worktree方式で gh-pages にデプロイするスクリプト
# ===============================

# 1. パス設定
$SourceRoot = Split-Path $MyInvocation.MyCommand.Path -Parent
# 親ディレクトリの "typescript_portfolio-pages" をターゲットとする（相対パス）
$PagesRoot = Join-Path (Split-Path $SourceRoot -Parent) "typescript_portfolio-pages"

Write-Host "`n== Deploy start ==" -ForegroundColor Cyan
Write-Host "Source: $SourceRoot" -ForegroundColor Gray
Write-Host "Target: $PagesRoot" -ForegroundColor Gray

# 2. main の作業ツリーをチェック
Set-Location $SourceRoot
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "⚠ main に未コミットの変更があります。コミットしてから実行してください。" -ForegroundColor Yellow
    exit 1
}

# 3. ビルド実行
Write-Host "-> Running: npm run build" -ForegroundColor Green
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ ビルドに失敗しました。" -ForegroundColor Red
    exit 1
}

# 4. gh-pages 側へ移動
if (-not (Test-Path $PagesRoot)) {
    Write-Host "❌ Target directory not found: $PagesRoot" -ForegroundColor Red
    exit 1
}
Set-Location $PagesRoot
Write-Host "-> Pulling latest gh-pages" -ForegroundColor Gray
git pull origin gh-pages

# 5. gh-pages 内の古いファイル削除（.git だけ残す）
Write-Host "-> Cleaning gh-pages worktree" -ForegroundColor Gray
Get-ChildItem -Force | Where-Object { $_.Name -notin @(".git", ".gitignore") } | Remove-Item -Recurse -Force

# 6. dist の中身をコピー
Write-Host "-> Copying dist/* to gh-pages" -ForegroundColor Gray
Copy-Item "$SourceRoot\dist\*" . -Recurse

# 7. git add
git add -A

# 8. 変更がない場合はスキップ
git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
    Write-Host "変更がないためデプロイ不要。" -ForegroundColor Yellow
    exit 0
}

# 9. コミット＆プッシュ
$time = Get-Date -Format "yyyy-MM-dd HH:mm"
$commitMessage = "Deploy: $time"

Write-Host "-> git commit: $commitMessage" -ForegroundColor Green
git commit -m "$commitMessage"

Write-Host "-> git push origin gh-pages" -ForegroundColor Green
git push origin gh-pages

Write-Host "== Deploy done ==" -ForegroundColor Cyan
