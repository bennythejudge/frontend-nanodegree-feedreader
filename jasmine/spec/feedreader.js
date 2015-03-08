/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        function check_feed_url_is_defined(feed,index) {
            it('The URL of feed ' + index + ' is defined' ,function() {
                expect(feed.url).toBeDefined();
            });
        };
        function check_feed_url_is_not_empty(feed,index) {
            it('The URL of feed ' + index + ' is not empty' ,function() {
                expect(feed.url).not.toBe('');
            });
        };
        for (var x=0; x<allFeeds.length; x++) {
            check_feed_url_is_defined(allFeeds[x],x);
            check_feed_url_is_not_empty(allFeeds[x],x);
        };
        
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        function check_feed_name_is_defined(feed,index) {
            it('The NAME in feed ' + index + ' is defined' ,function() {
                expect(feed.name).toBeDefined();
            });
        };
        function check_feed_name_is_not_empty(feed,index) {
            it('The NAME in feed ' + index + ' is not empty' ,function() {
                expect(feed.name).not.toBe('');
            });
        };
        for (var x=0; x<allFeeds.length; x++) {
            check_feed_name_is_defined(allFeeds[x],x);
            check_feed_name_is_not_empty(allFeeds[x],x);
        }
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        // let's grab the body
        var body = $('body');

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default',function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
        

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('toggles between visible and invisible each time the menu icon is clicked', function() {
            // grab the menu icon
            var menuIcon = $('.menu-icon-link');
            var menuBeforeHidden;
            var menuAfterHidden;
            // click once and check
            menuIcon.click();
            if (body.hasClass('menu-hidden')) {
                menuBeforeHidden = true;
            } else {
                menuBeforeHidden = false;
            }
            // click again and check
            menuIcon.click();
            if (body.hasClass('menu-hidden')) {
                menuAfterHidden = true;
            } else {
                menuAfterHidden = false;
            }
            expect(menuBeforeHidden === menuAfterHidden).not.toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            // console.log('inside the beaforeEach');
            loadFeed(0, function() {
                // console.log('inside the jasmine')
                done();
            });
        });
        it('have at least one entry after loadFeed is called', function(done) {
            // console.log('inside the it for initial entries');
            // grab the DOM 
            var feed = $('.entry');
            var feedEntries = feed.length;
            // console.log('nr. of entries in the feed div ' + feedEntries);
            // console.log(feed);
            expect(feedEntries>0).toBe(true);
            done();
        })
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        /** to save the state 'before' */
        var saveBeforeContent;
        beforeEach(function(done) {
            // console.log('inside the beaforeEach');
            saveBeforeContent = $('.feed').html();
            // console.log('saveBeforeContent');
            // console.log(saveBeforeContent);
            // console.log(saveBeforeContent.length);
            /** now call the loadFeed */
            loadFeed(1, function() {
                done();
            });
        });
        it('changes the contet of the div .feed', function(done) {
            /** get current content */
            var saveAfterContent = $('.feed').html();
            // console.log('saveAfterContent');
            // console.log(saveAfterContent);
            expect(saveBeforeContent).not.toBe(saveAfterContent);
            done();
        });
    });
}());
