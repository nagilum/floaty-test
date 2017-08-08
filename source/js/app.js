"use strict";

var viewUser = function (ctx) {
    console.log(ctx);
};

var editUser = function (ctx) {
    console.log(ctx);
};

var checkLoggedIn = function (ctx) {
    throw new Error('BLARGH');
};

jk(() => {
    floaty.template('frontpage', 'template#frontpage');
    floaty.template('about', 'template#about');

    floaty.route('/', () => { floaty.render('frontpage', 'article'); });
    floaty.route('/about', () => { floaty.render('about', 'article'); });

    floaty.route('/user/:id', viewUser);
    floaty.route('/user/:id/edit', checkLoggedIn, editUser);

    floaty.notFound((ctx) => { alert('PANIC'); });

    floaty.init();
});