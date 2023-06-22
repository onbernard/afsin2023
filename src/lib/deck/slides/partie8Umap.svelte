<section>
    <h3 class="border-b-2 border-orange-300">
        <span>UMAP</span>
    </h3>
    <div class="flex justify-center">
            Réduction de dimensions
            <br>
            pour la visualisation
    </div>
</section>

<section data-background-iframe="https://duhaime.s3.amazonaws.com/apps/umap-zoo/index.html" data-background-interactive>
</section>

<section>
    <h3 class="border-b-2 border-orange-300">
        <span>Vecteurs générés par les modèles</span>
    </h3>
    <div><img src="plots/umap.png" ></div>
    <ul class="text-xl">
        <li><span class="text-theme-header">13233</span> points représentants les <span class="text-theme-header">13233</span> photos de départ</li>
        <li>Deux points proches</li>
        <ul>
            <li class="flex">= deux photos que le modèle pense contenir la même personne</li>
        </ul>
        <li>On veut que deux <span class="text-theme-header">personnes différentes</span> occupent des régions bien <span class="text-theme-header">séparées</span></li>
        <li>À l'inverse on veut que les photos d'une <span class="text-theme-header">même personne</span> soient <span class="text-theme-header">proches</span> les une des autres</li>
    </ul>
    <aside class="notes">
    </aside>
</section>

<style lang="postcss">
    img {
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
        @apply w-fit h-72;
    }
</style>