$(document).ready(
  function () {
    $("#subscription-container").mouseenter(
      function () {
        $(".subscription-dropdown").toggle();
      }
    );
    $("#subscription-container").mouseleave(
      function () {
        $(".subscription-dropdown").toggle();
      }
    );

    $("#who-we-are-container").mouseenter(
      function () {
        $(".who-we-are-dropdown").toggle();
      }
    );
    $("#who-we-are-container").mouseleave(
      function () {
        $(".who-we-are-dropdown").toggle();
      }
    );

    $("#help-container").mouseenter(
      function () {
        $(".help-dropdown").toggle();
      }
    );
    $("#help-container").mouseleave(
      function () {
        $(".help-dropdown").toggle();
      }
    );

  }
);
