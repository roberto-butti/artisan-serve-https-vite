tmux \
    new-session  'php artisan serve' \; \
    split-window 'npm run dev' \; \
    detach-client
tmux a
