$(document).ready(
  function () {
    $("#subscription-container > a").mouseenter(
      function () {
        $(".subscription-dropdown").toggle();
      }
    );
    $("#subscription-container > a").mouseleave(
      function () {
        $(".subscription-dropdown").toggle();
      }
    );

    $("#who-we-are-container > a").mouseenter(
      function () {
        $(".who-we-are-dropdown").toggle();
      }
    );
    $("#who-we-are-container > a").mouseleave(
      function () {
        $(".who-we-are-dropdown").toggle();
      }
    );

    $("#help-container > a").mouseenter(
      function () {
        $(".help-dropdown").toggle();
      }
    );
    $("#help-container > a").mouseleave(
      function () {
        $(".help-dropdown").toggle();
      }
    );

  }
);
