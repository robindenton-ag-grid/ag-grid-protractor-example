describe('ag-Grid Protractor tests', () => {
    // load page we are testing
    // make sure you are running the grid example via cli - 'npm run dev'
    beforeEach(() => {
        browser.get('http://localhost:4200');
    });

    it('Is using the balham theme', () => {
        const el = $('#myGrid');
        expect(el.getAttribute('class')).toEqual('ag-theme-balham');
    });

    it('Drops year column from tool panel in to the labels section', () => {
        // find a column that is a child of column panel
        // will find multiple columns
        // by default takes the first (year in this case)
        let col = $('.ag-primary-cols-list-panel').
            $('.ag-column-tool-panel-column.ag-toolpanel-indent-0');
        // get the drag handle element from the col, to simulate the drag
        let dragHandle = col.$('.ag-column-drag');

        // get the column label section we are dragging to
        let dragTarget = $('.ag-column-drop.ag-font-style.ag-column-drop-vertical.ag-column-drop-pivot');

        // perform the drag
        browser.actions().dragAndDrop(dragHandle, dragTarget).perform();

        // get the item, now in column labels
        dragTarget.$('.ag-column-drop-list').
            $('.ag-column-drop-cell').
            // get the text of the column label, compare to the original
            $('.ag-column-drop-cell-text').getText().then(dropText => {
                col.$('.ag-column-tool-panel-column-label').getText().then(text => {
                    expect(text).toEqual(dropText);
                });
            });
    });
});