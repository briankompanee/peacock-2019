export default {
  init() {
    // JavaScript to be fired on all pages

      // Masonry
      $('.masonry-block').matchHeight({
        target: $('.masonry-img')
      });
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired

      //stop video player when modal closes
      $('body').on('hidden.bs.modal', '.modal', function () {
        $('video').trigger('pause');
      });
  },
};
