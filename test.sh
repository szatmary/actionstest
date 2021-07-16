if test -f "main"; then
    echo "main exists."
    ./main | node test.js
fi

if test -f "main.js"; then
    echo "main.js exists."
    node main.js | node test.js
fi