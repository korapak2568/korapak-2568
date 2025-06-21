# Revert GitLab

## Step by step: Manual Revert of Merge Commit

* Find the merge commit SHA: `Go to GitLab ➝ Repository ➝ Commits ➝ Copy the SHA (e.g., 084d697b).`
* Clone or pull the latest code: `git checkout main` and `git pull origin main`
* Run the revert command with -m 1: `git revert -m 1 084d697b`
* Resolve any conflicts, if prompted, then: `git add .` and `git commit ...`
* Push the changes to GitLab: `git push origin main`

## Step-by-Step to Finish the Revert

* Open and resolve the conflict

```
<<<<<<< HEAD
// current code on main branch
=======
// conflicting code from the reverted merge
>>>>>>> commit-sha
```

* Mark the conflict as resolved: `git add src/router/router_food.js`
* Continue the revert: `git revert --continue`
* Push the changes: `git push origin main`
* Optional: Abort to cancel: `git revert --abort`