<script>
    import { base } from '$app/paths';
</script>

<section data-background-image="images/stock/human_face.jpg">
    <div class="bg-opacity-60 bg-black backdrop-blur-md p-8 border-2 border-orange-300 text-theme-header font-bold">
        Reconnaissance faciale pour l'expertise numérique
        <hr class="border-white">
        Enjeux et défis
    </div>
    <div class="h-32 bg-opacity-60 bg-black backdrop-blur-md"><img class="lerti-logo" src="{base}/Lerti_logo_vect.svg"></div>
    <aside class="notes">
    </aside>
</section>

<section>
    <div class="grid grid-cols-2 items-center">
        <strong class="border-y-2 border-orange-300">Onésime BERNARD</strong>
        <div class="text-xl">
            <ul>
                <li>Études en mathématiques et informatique</li>
                <li>Développeur/SysAdmin au LERTI</li>
            </ul>
        </div>
    </div>
    <aside class="notes">
    </aside>
</section>


<section>
    <h3 class="border-b-2 border-orange-300">
        <span>Plan</span>
    </h3>
    <div class="flex justify-around items-start">
        <ol class="text-base">
            <li class="text-theme-header font-bold">La question</li>
            <ul>
                <li>Traces-Références</li>
            </ul>
            <li class="text-theme-header font-bold">Les attentes</li>
            <ul>
                <li>Méthode scientifique</li>
                <li>Les difficultés</li>
                <li>Moins laborieux, plus rapide, au moins aussi bon</li>
            </ul>
            <li class="text-theme-header font-bold">L'intelligence artificielle ?</li>
            <ul>
                <li>Méthode par apprentissage</li>
                <li>En pratique</li>
                <li>Manipulations</li>
            </ul>
            <li class="text-theme-header font-bold">Cas légitimes d'utilisation</li>
        </ol>
        <ul class="text-2xl">
            <li class="text-theme-header font-bold">Précision et fiabilité</li>
            <ul>
                <li>Faux positifs, faux négatifs</li>
                <li>Instabilité</li>
                <li>Biais potentiels</li>
                <li>Manipulation</li>
            </ul>
            <li class="text-theme-header font-bold">Méthodologie et témoignage d'expert</li>
            <ul>
                <li>Transparence</li>
            </ul>
        </ul>
    </div>
</section>

<style lang="postcss">
    img {
        @apply border-orange-300 border-2;
        display: block;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        z-index: -1;
        max-width: 100%;
    }
    .img-ctnr {
        @apply flex justify-center items-center;
        @apply w-fit h-96;
    }
    .lerti-logo {
        @apply border-none;
        display: block;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        z-index: -1;
        max-width: 100%;
    }
</style>