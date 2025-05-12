<script>
    import { base } from '$app/paths';
</script>

<section>
    <h3 class="border-b-2 border-orange-300 flex justify-center">
        Scores de similarités
    </h3>
    <div class="flex-col">
        <div class="flex justify-center items-center gap-12 fill-theme-header">
            <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
        </div>
        <ul class="">
            <li>On compare <span class="text-theme-header font-bold">deux à deux</span> chaque images du jeu de données</li>
            <li>13233² ou <span class="text-theme-header font-bold">175 112 289</span> paires de photos possible</li>
            <ul>
                <li>Soit contenant la même personne</li>
                <li>Plus probablement, contenant deux personnes différentes</li>
            </ul>
            <li>Score entre <span class="text-theme-header font-bold">-1 et 1</span></li>
        </ul>
    </div>
</section>

<section>
    <h3 class="border-b-2 border-orange-300">
        <span>Similarité 2 à 2</span>
    </h3>
    <div>
        <div>
            <div class="w-full"><img src="{base}/plots/similarity_matrices.png" ></div>
        </div>
        <div class="flex justify-between items-center gap-2">
            <div class="h-72"><img src="{base}/plots/zoom_arcface_sim.png" ></div>
            <div class="flex flex-col gap-2">
                <ul class="text-lg r-frame px-6">
                    <li><span class="text-theme-header font-bold">13233</span> photos de personnes</li>
                    <li>Tableau à <span class="text-theme-header font-bold">13233</span> lignes et <span class="text-theme-header font-bold">13233</span> colonnes</li>
                    <li>La case <span class="text-theme-header font-bold">(i,j)</span> correspond au score de similarité entre les photos <span class="text-theme-header font-bold">i</span> et <span class="text-theme-header">j</span></li>
                </ul>
                <ul class="text-lg r-frame px-6">
                    <li class="text-theme-header font-bold">Les images ont été triées par personnes</li>
                    <ul>
                        <li>Les pixels proches de la diagonale comparent des photos contenant la <span class="text-theme-header font-bold">même personne</span></li>
                        <li>Les pixels éloignées comparent des photos contenant des <span class="text-theme-header font-bold">personnes différentes</span></li>
                    </ul>
                </ul>
            </div>
        </div>
        
    </div>
    <aside class="notes">
        <ul class="text-lg r-frame px-6">
            <li><span class="text-theme-header">Diagonale égale à 1</span></li>
            <ul>
                <li>Une photo est identique à elle-même</li>
            </ul>
            <li><span class="text-theme-header">Matrice symétrique</span></li>
            <ul>
                <li>La similarité entre les photos i et j est égale à celle entre j et i</li>
            </ul>
            <li><span class="text-theme-header">Motif quadrillé</span></li>
            <ul>
                <li>Les photos d'une même personne se juxtaposent ce qui donne une série de lignes qui se ressemblent</li>
            </ul>
        </ul>
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
</style>