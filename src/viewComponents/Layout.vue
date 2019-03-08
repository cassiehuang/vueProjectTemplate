<template>
<div>
    <header>
      <slot name="header">
          <my-header></my-header>
        <slot>  
    </header>
    <main>
        <aside>
        <slot name="aside">
            <my-aside>
                <slot name="aside-bottom"></slot>
            </my-aside>
        </slot>
    </aside>
    <section>
        <slot name="content"></slot>
    </section>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
</div>
</template>

import MyHeader from '@/viewComponents/Header.vue';
import MyFooter from '@/viewComponents/Footer.vue';
import myAside from '@/vieComponents/AsideNav';
<script>
</script>