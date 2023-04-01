<template>
    <!-- ***** Header Area Start ***** -->
    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <!-- ***** Logo Start ***** -->
                        <a href="index.html" class="logo">
                            <img style="margin-top: -23px" width="70" src="../../assets/images/logo.png">
                        </a>
                        <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** -->
                        <ul class="nav">

                            <li class="scroll-to-section"><a href="#welcome" class="menu-item">Home</a></li>
                            <li class="scroll-to-section"><a href="#about" class="menu-item">About</a></li>
                            <li class="scroll-to-section"><a href="#testimonials" class="menu-item">Testimonials</a>
                            </li>
                            <li class="submenu">
                                <a href="">Drop Down <span><i class="fas fa-caret-down"></i></span></a>
                                <ul>
                                    <li><a href="" class="menu-item">About Us</a></li>
                                    <li><a href="" class="menu-item">Features</a></li>
                                    <li><a href="" class="menu-item">FAQ's</a></li>
                                    <li><a href="" class="menu-item">Blog</a></li>
                                </ul>
                            </li>
                            <li class="scroll-to-section"><a href="#contact-us" class="menu-item">Contact Us</a></li>
                        </ul>
                        <a @click="expandMenu()" class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        <!-- ***** Menu End ***** -->
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
    export default {
        name: 'navBar',
        methods: {
        expandMenu(){
            const headerNav = document.querySelector('.header-area .nav');
            const menuTrigger = document.querySelector('.menu-trigger');
            if (menuTrigger.classList.contains('active')) {
                headerNav.style.display = 'none';
                menuTrigger.classList.remove('active');
            } else {
                headerNav.style.display = 'block';
                menuTrigger.classList.add('active');
            }
        }
        }
    }
</script>