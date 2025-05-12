<script>
    import { base } from '$app/paths';
</script>

<section>
    <h2 class="border-y-2 border-orange-300">En pratique</h2>
    <span class="text-3xl">Mesurons nous-même les performances de l'état de l'art</span>
    <aside class="notes">
        
    </aside>
</section>

<section>
    <h3 class="border-b-2 border-orange-300">
        <span>Labelled Faces in the Wild</span>
    </h3>
    <div class="flex justify-around items-center">
        <div class="grid grid-cols-3 gap-2 basis-1/2">
            <div class="flex flex-col">
                <small>Angelina Jolie</small>
                <div class="img-ctnr"><img class="face-img" src="{base}/images/other_faces/Angelina_Jolie_0001.png"></div>
            </div>
            <div class="flex flex-col">
                <small>Angelina Jolie</small>
                <div class="img-ctnr"><img class="face-img" src="{base}/images/other_faces/Angelina_Jolie_0002.png"></div>
            </div>
            <div class="flex flex-col">
                <small>Brad Pitt</small>
                <div class="img-ctnr"><img class="face-img" src="{base}/images/other_faces/Brad_Pitt_0001.png"></div>
            </div>
            <div class="flex flex-col">
                <small>George W Bush</small>
                <div class="img-ctnr"><img class="face-img" src="{base}/images/other_faces/George_W_Bush_0001.png"></div>
            </div>
            <div class="flex flex-col">
                <small>George W Bush</small>
                <div class="img-ctnr"><img class="face-img" src="{base}/images/other_faces/George_W_Bush_0002.png"></div>
            </div>
            <div class="flex flex-col">
                <small>Saddam Hussein</small>
                <div class="img-ctnr"><img class="face-img" src="{base}/images/other_faces/Saddam_Hussein_0001.png"></div>
            </div>
            <div class="flex flex-col">
                <small>Saddam Hussein</small>
                <div class="img-ctnr"><img class="face-img" src="{base}/images/other_faces/Saddam_Hussein_0002.png"></div>
            </div>
            <div class="flex flex-col">
                <small>Silvio Berlusconi</small>
                <div class="img-ctnr"><img class="face-img" src="{base}/images/other_faces/Silvio_Berlusconi_0001.png"></div>
            </div>
            <div class="flex flex-col">
                <small>Zinedine Zidane</small>
                <div class="img-ctnr"><img class="face-img" src="{base}/images/other_faces/Zinedine_Zidane_0001.png"></div>
            </div>
        </div>
        <div class="basis-1/2">
            <ul class="">
                <li><span class="text-[#FEE8D5]">13233</span> photos</li>
                <li><span class="text-[#FEE8D5]">5749</span> personnes</li>
                <li><span class="text-[#FEE8D5]">1680</span> avec &gt 1 photos</li>
            </ul>
        </div>
    </div>
    <aside class="notes">
    </aside>
</section>

<section>
    <h3 class="border-b-2 border-orange-300">
        <span>Modèles</span>
    </h3>
    <div class="flex justify-center items-center">
        <img src="{base}/images/illustrations/comparaison_modeles.png">
    </div>
</section>

<section>
    <h3 class="border-b-2 border-orange-300 flex justify-center">
        C'est parti<svg class="fill-theme-header m-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
    </h3>
    <div class="flex justify-between items-center">
        <ul>
            <li><span class="text-theme-header">13233</span> photos</li>
            <ul>
                <li><span class="text-theme-header">13233</span> vecteurs</li>
            </ul>
            <li><span class="text-theme-header">3</span> modèles</li>
            <ul>
                <li>ArcFace/FaceNet</li>
                <ul>
                    <li><span class="text-theme-header">512</span> dimensions</li>
                </ul>
                <li>VGG-Face</li>
                <ul>
                    <li><span class="text-theme-header">2622</span> dimensions</li>
                </ul>
            </ul>
        </ul>
        <div><img src="{base}/images/stock/mind-blow-galaxy.gif"></div>
    </div>
</section>

<style lang="postcss">
    .face-img {
        @apply border-2 border-[#FEE8D5];
        display: block;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        z-index: -1;
        max-width: 100%;
    }
    .img-ctnr {
        @apply w-fit h-36;
    }
    small {
        @apply text-base mt-6 -mb-4;
    }
</style>