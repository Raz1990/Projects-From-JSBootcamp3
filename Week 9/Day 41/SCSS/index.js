function changeTheme() {
    let body =  document.getElementsByTagName("body")[0];
    let bodyTheme = body.classList;
    bodyTheme.toggle("dark");
    bodyTheme.toggle("light")
}