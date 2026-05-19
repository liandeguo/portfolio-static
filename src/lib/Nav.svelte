<nav class="px-(--inner-padding) py-6 fixed justify-between flex w-screen z-50">
    <p>LEANDER GUO</p>
    <div class="mail flex flex-col overflow-hidden" data-cursor="-hidden">
        <a href="mailto:hey@liande.me" class="mailLink uppercase">hey@liande.me</a>
        <span id="underlineMail" class=" bg-black h-[1px]"></span>
    </div>
</nav>

<style>
    .mail:hover #underlineMail {
        transform: translateX(0%);
        transition: 0.2s ease-in-out;
    }

    #underlineMail {
        transform: translateX(-100%);
    }

    nav {
        background: rgba(255, 255, 255, 0);
        border-radius: 16px;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
    }
</style>