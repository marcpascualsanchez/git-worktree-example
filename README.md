# Worktree example

## Guide
1. Develop an amazing new feature
2. Get asked for something completely different by your boss
3. Use `git sta`**WAIT**, try to use worktree instead!
    ```sh
    git worktree add -b hotfix ./tmp-hotfix master
    # check if it is present listing it
    git worktree list
    ```
4. Develop inside `./tmp-hotfix` in the `hotfix` branch
5. Push the `hotfix` branch
6. Go back to step 1!