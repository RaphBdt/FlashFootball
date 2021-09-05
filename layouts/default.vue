<template>
    <div>
        <Navbar />
        <Nuxt />
        <Footer />
    </div>
</template>

<style>
    body {
        background: #18171D;
    }

    h1, h2, h3, h4, h5, h6 {
        color: #ffffff;
    }

    p {
        color: #8A8A8F;
    }

    a {
        transition: color 200ms;
    }

    a:hover {
        text-decoration: none;
    }

    .navbar {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 9999;
    }

    .first-content {
        margin-top: 150px;
    }

    article h2 {
        font-size: 18px;
    }

    @media screen and (min-width: 992px) {
        .first-content {
            margin-top: 165px;
        }

        article h2 {
            font-size: 22px;
        }
    }
</style>