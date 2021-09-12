
<div class="hr"></div>

<div class="wrap">
    <a href="/">See all activity <img src="/icon/arrow.svg" alt=""> </a>
</div>

<style>
    .hr {
        width: 100%;
        height: 1px;
        position: relative;
    }
    .wrap {
        padding: 1rem;
    }
    a {
        color: #688EFF;
        text-decoration: none;
        position: relative;

        display: flex;
        align-items: center;
        gap: 0.7rem;
        font-weight: 600;
    }
    .hr::after {
        content: '';
        
        width: 100%;
        left: 0;
        right: 0;
        height: 100%;
        display: block;
        position: absolute;
        background-color: rgba(240, 255, 255, 0.212);

    }
    img {
        position: relative;
        top: 1px;
    }
</style>