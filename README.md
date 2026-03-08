# Chat-App
# Git操作

---新たにブランチを作成---
1.mainブランチにいることを確認。いない場合は git checkout main
2.メインブランチの最新状態を取得
git pull origin main
3.ブランチ作成
git checkout -b ブランチ名


---作業内容をコミット---
1.変更をステージング
git add .  ※このコマンドは変更ファイルすべてをコミットするので注意。該当ファイルのみコミットしたい場合は 例：git add backend/main.py

2.コミット
git commit -m "変更内容"

3.リモートへプッシュ
git push origin ブランチ名　←これでgithubに反映される



---mainブランチを最新にする---
1.git checkout main
2.git pull origin main


# Docker操作

---コンテナ起動---
docker compose up --build

---コンテナ停止---
docker compose down または起動してるターミナルでCtrl + C

---コンテナ状態確認---
docker ps



