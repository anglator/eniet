function getMenu(category) {
    return _this.getMenuItem(category, "folder", () => app.showCategory(category));
}
