<script lang="ts">
    import { quintOut } from 'svelte/easing';
    import { draw } from 'svelte/transition';
    import { path_1, path_2, path_3, path_4, path_5, path_6, path_7, path_8 } from "$lib/paths";
</script>

<div class="fixed inset-0 w-full h-full overflow-hidden -z-10">
    <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 414 896" preserveAspectRatio="none">
        <defs>
            <linearGradient id="gradient_1" x1="0%" y1="0%" x2="100%" y2="0">
                <stop offset="0%" style="stop-color:#00ffff;"/>
                <stop offset="50%" style="stop-color:#048cee;"/>
                <stop offset="100%" style="stop-color:#00ffff;"/>
            </linearGradient>
            <pattern id="pattern_1" x="0" y="0" width="300%" height="100%" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="150%" height="100%" fill="url(#gradient_1)">
                    <animate attributeType="XML" attributeName="x" from="0" to="150%" dur="3s" repeatCount="indefinite"/>
                </rect>
                <rect x="-150%" y="0" width="150%" height="100%" fill="url(#gradient_1)">
                    <animate attributeType="XML" attributeName="x" from="-150%" to="0" dur="3s" repeatCount="indefinite"/>
                </rect>
            </pattern>

            <linearGradient id="gradient_2" x1="0%" y1="0%" x2="100%" y2="0">
                <stop offset="0%" style="stop-color:#ffd7b8;"/>
                <stop offset="50%" style="stop-color:#f59473;"/>
                <stop offset="100%" style="stop-color:#ffd7b8;"/>
            </linearGradient>
            <pattern id="pattern_2" x="0" y="0" width="300%" height="100%" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="150%" height="100%" fill="url(#gradient_2)">
                    <animate attributeType="XML" attributeName="x" from="0" to="150%" dur="4s" repeatCount="indefinite"/>
                </rect>
                <rect x="-150%" y="0" width="150%" height="100%" fill="url(#gradient_2)">
                    <animate attributeType="XML" attributeName="x" from="-150%" to="0" dur="4s" repeatCount="indefinite"/>
                </rect>
            </pattern>

            <linearGradient id="gradient_3" x1="0%" y1="0%" x2="100%" y2="0">
                <stop offset="0%" style="stop-color:#bb2f1b;"/>
                <stop offset="50%" style="stop-color:#e63434;"/>
                <stop offset="100%" style="stop-color:#bb2f1b;"/>
            </linearGradient>
            <pattern id="pattern_3" x="0" y="0" width="300%" height="100%" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="150%" height="100%" fill="url(#gradient_3)">
                    <animate attributeType="XML" attributeName="x" from="0" to="150%" dur="3s" repeatCount="indefinite"/>
                </rect>
                <rect x="-150%" y="0" width="150%" height="100%" fill="url(#gradient_3)">
                    <animate attributeType="XML" attributeName="x" from="-150%" to="0" dur="3s" repeatCount="indefinite"/>
                </rect>
            </pattern>

            <linearGradient id="gradient_4" x1="0%" y1="0%" x2="100%" y2="0">
                <stop offset="0%" style="stop-color:#993435;"/>
                <stop offset="50%" style="stop-color:#4c1a1b;"/>
                <stop offset="100%" style="stop-color:#993435;"/>
            </linearGradient>
            <pattern id="pattern_4" x="0" y="0" width="300%" height="100%" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="150%" height="100%" fill="url(#gradient_4)">
                    <animate attributeType="XML" attributeName="x" from="0" to="150%" dur="5s" repeatCount="indefinite"/>
                </rect>
                <rect x="-150%" y="0" width="150%" height="100%" fill="url(#gradient_4)">
                    <animate attributeType="XML" attributeName="x" from="-150%" to="0" dur="5s" repeatCount="indefinite"/>
                </rect>
            </pattern>

            <mask id="mask_1">
                <g>
                    <path in:draw={{ duration: 3000 }} d={path_1} stroke="white" stroke-width="2" />
                </g>
                <g>
                    <path in:draw={{ duration: 3000 }} d={path_5} stroke="white" stroke-width="2" />
                </g>
            </mask>
            <mask id="mask_2">
                <g>
                    <path in:draw={{ duration: 3000 }} d={path_2} stroke="white" stroke-width="2" />
                </g>
                <g>
                    <path in:draw={{ duration: 3000 }} d={path_6} stroke="white" stroke-width="2" />
                </g>
            </mask>
            <mask id="mask_3">
                <g>
                    <path in:draw={{ duration: 3000 }} d={path_3} stroke="white" stroke-width="2" />
                </g>
                <g>
                    <path in:draw={{ duration: 3000 }} d={path_7} stroke="white" stroke-width="2" />
                </g>
            </mask>
            <mask id="mask_4">
                <g>
                    <path in:draw={{ duration: 3000 }} d={path_4} stroke="white" stroke-width="2" />
                </g>
                <g>
                    <path in:draw={{ duration: 3000 }} d={path_8} stroke="white" stroke-width="2" />
                </g>
            </mask>
        </defs>
        <rect width="100%" height="100%" fill="#2a2924"/>
        <rect width="100%" height="100%" fill="url(#pattern_1)" mask="url(#mask_1)"/>
        <rect width="100%" height="100%" fill="url(#pattern_2)" mask="url(#mask_2)"/>
        <rect width="100%" height="100%" fill="url(#pattern_3)" mask="url(#mask_3)"/>
        <rect width="100%" height="100%" fill="url(#pattern_4)" mask="url(#mask_4)"/>
    </svg>
</div>