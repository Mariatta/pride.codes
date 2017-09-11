addLoadEvent(insert)

function addLoadEvent(func) {
  if (window.addEventListener)
    window.addEventListener("load", func, false);
  else if (window.attachEvent)
    window.attachEvent("onload", func);
  else { // fallback
    var old = window.onload;
    window.onload = function() {
      if (old) old();
      func();
    };
  }
}


function insert() {

  var corner = '<a target="_blank" href="http://www.equalitycampaign.org.au/planyourvote?splash=1" class="pridecodes-voteyes-corner" aria-label="Vote Yes"> <svg viewBox="0 0 149 150" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="pridecodes-voteyes-left-corner-svg" style="position: fixed;top: 0;border: 0;left: 0;"> <!-- Generator: Sketch 43.2 (39069) - http://www.bohemiancoding.com/sketch --> <desc>Created with Sketch.</desc> <defs></defs>     <g id="corner" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">         <g id="top-left" transform="translate(38.000000, 37.000000) rotate(-90.000000) translate(-38.000000, -37.000000) translate(-75.000000, -76.000000)">             <g id="Group" transform="translate(112.826425, 113.080213) rotate(-45.000000) translate(-112.826425, -113.080213) translate(59.326425, 7.080213)">                 <polygon id="Rectangle-2" fill="#D3555C" points="1.35355339 4.26325641e-14 36.7088924 35.3553391 1 35.4123828"></polygon>                 <polygon id="Rectangle-2-Copy" fill="#F48D3A" points="1 35.4123828 36.7067649 35.3553391 72.0599976 70.7106781 1 70.8223826"></polygon>                 <polygon id="Rectangle-2-Copy-2" fill="#FDC753" points="1 70.8247655 72.0642315 70.7106781 106.712464 105.35891 1 106.237148"></polygon>                 <polygon id="Rectangle-2-Copy-3" fill="#70BC53" points="1 106.237148 106.712464 105.35891 69.9429112 142.128463 1 141.649531"></polygon>                 <polygon id="Rectangle-2-Copy-4" fill="#249CD5" points="1 141.649531 70.6500179 141.421356 34.5875721 177.483802 1 177.061914"></polygon>                 <polygon id="Rectangle-2-Copy-5" fill="#9D61A4" points="1 177.061914 35.2946789 176.776695 0.646446609 211.424928"></polygon>             </g>             <path d="M39.0232866,105.175473 L47.1691567,87.0848528 L49.9692995,89.8849957 L45.3872476,100.067333 L45.4042182,100.084304 L55.5695853,95.4852814 L58.3697281,98.2854242 L40.2960788,106.448265 L39.0232866,105.175473 Z M66.1252753,106.074913 C67.0416903,106.991327 67.7261628,108.020865 68.1787134,109.163555 C68.631264,110.306245 68.8603643,111.474374 68.8660212,112.667976 C68.871678,113.861578 68.6482345,115.029707 68.1956839,116.172397 C67.7431333,117.315088 67.0643176,118.338968 66.1592164,119.244069 C65.2541152,120.14917 64.2330632,120.825158 63.0960298,121.272051 C61.9589964,121.718945 60.7936961,121.93956 59.6000939,121.933903 C58.4064917,121.928247 57.238363,121.699146 56.0956727,121.246596 C54.9529824,120.794045 53.9234452,120.109573 53.0070303,119.193158 C52.1019291,118.288056 51.420285,117.261348 50.9620775,116.113 C50.50387,114.964653 50.2747697,113.796525 50.2747697,112.608579 C50.2747697,111.420634 50.4982132,110.258162 50.9451069,109.121129 C51.3920006,107.984095 52.0679879,106.963043 52.9730892,106.057942 C53.8781904,105.152841 54.9020707,104.474025 56.044761,104.021474 C57.1874513,103.568924 58.3527516,103.342652 59.5406969,103.342652 C60.7286423,103.342652 61.896771,103.571752 63.0451181,104.02996 C64.1934653,104.488167 65.2201741,105.169811 66.1252753,106.074913 Z M55.6544381,116.54575 C56.1974988,117.08881 56.8112613,117.498928 57.4957441,117.776116 C58.1802269,118.053303 58.8788414,118.191894 59.5916086,118.191894 C60.3043758,118.191894 60.9973335,118.05896 61.6705026,117.793086 C62.3436716,117.527213 62.9517773,117.122752 63.4948381,116.579691 C64.0378988,116.03663 64.4451882,115.425696 64.7167186,114.74687 C64.9882489,114.068044 65.1240121,113.372258 65.1240121,112.659491 C65.1240121,111.946724 64.9854205,111.248109 64.7082333,110.563626 C64.431046,109.879144 64.0209282,109.265381 63.4778675,108.72232 C62.9348068,108.17926 62.3210442,107.769142 61.6365614,107.491955 C60.9520786,107.214767 60.2534641,107.076176 59.5406969,107.076176 C58.8279297,107.076176 58.1321436,107.211939 57.4533177,107.483469 C56.7744918,107.755 56.1635577,108.162289 55.6204969,108.70535 C55.0774362,109.24841 54.6729752,109.856516 54.4071017,110.529685 C54.1412282,111.202854 54.0082935,111.895812 54.0082935,112.608579 C54.0082935,113.321346 54.146885,114.019961 54.4240723,114.704444 C54.7012595,115.388926 55.1113773,116.002689 55.6544381,116.54575 Z M82.9091618,122.824858 L80.2956952,125.438325 L77.5294934,122.672123 L67.0247151,133.176901 L64.4112484,130.563435 L74.9160268,120.058656 L72.1498251,117.292455 L74.7632917,114.678988 L82.9091618,122.824858 Z M92.0053835,137.148013 L86.47298,131.615609 L83.8255722,134.263017 L88.2888302,138.726275 L85.6753636,141.339742 L81.2121056,136.876484 L78.5816683,139.506921 L84.1140718,145.039325 L81.5006051,147.652791 L73.354735,139.506921 L86.47298,126.388676 L94.6188501,134.534546 L92.0053835,137.148013 Z M112.646641,152.562337 L102.294597,154.938215 L95.5403133,161.692499 L92.9268467,159.079033 L99.6811306,152.324749 L102.07398,141.989676 L105.162622,145.078319 L103.821948,150.797398 L109.557998,149.473694 L112.646641,152.562337 Z M121.488304,166.630933 L115.9559,161.09853 L113.308493,163.745938 L117.771751,168.209196 L115.158284,170.822662 L110.695026,166.359404 L108.064589,168.989841 L113.596992,174.522245 L110.983525,177.135712 L102.837655,168.989841 L115.9559,155.871596 L124.10177,164.017467 L121.488304,166.630933 Z M118.145103,184.399112 C117.613356,183.867365 117.208895,183.264917 116.931708,182.591747 C116.65452,181.918578 116.521586,181.214307 116.532899,180.478912 C116.532899,179.732204 116.674319,179.019447 116.957164,178.340622 C117.240008,177.661796 117.647297,177.056518 118.179044,176.524771 L120.75857,179.104297 C120.385215,179.477651 120.198541,179.930195 120.198541,180.461942 C120.198541,180.993689 120.379559,181.440576 120.741599,181.802616 C121.114953,182.175971 121.567497,182.362645 122.099244,182.362645 C122.630991,182.362645 123.083535,182.175971 123.456889,181.802616 C123.683164,181.576341 123.813271,181.406637 123.847212,181.293499 C123.881153,181.180362 123.892467,181.072883 123.881153,180.971059 C123.858526,180.699528 123.770845,180.351635 123.618109,179.927369 C123.465374,179.503103 123.298498,179.053388 123.117478,178.578209 C122.449966,177.299754 122.087931,176.134454 122.031362,175.082273 C121.986107,174.335565 122.087929,173.634122 122.336832,172.977924 C122.585735,172.321725 122.976054,171.727762 123.507801,171.196015 C124.039548,170.664268 124.644825,170.256978 125.323651,169.974134 C126.002477,169.69129 126.715233,169.54987 127.461942,169.54987 C128.197337,169.538556 128.904436,169.668663 129.583262,169.940193 C130.262088,170.211723 130.867365,170.613356 131.399112,171.145103 C131.930859,171.67685 132.332492,172.282127 132.604022,172.960953 C132.875553,173.639779 133.011316,174.352536 133.011316,175.099244 C133.000002,175.834639 132.855754,176.544567 132.578567,177.22905 C132.301379,177.913532 131.896918,178.521638 131.365171,179.053385 L128.785646,176.47386 C129.159,176.100505 129.345674,175.647962 129.345674,175.116215 C129.345674,174.584468 129.159,174.131924 128.785646,173.75857 C128.423605,173.396529 127.976718,173.215512 127.444971,173.215512 C126.913224,173.215512 126.460681,173.402186 126.087326,173.77554 C126.019444,173.843423 125.940249,173.939588 125.849738,174.06404 C125.759228,174.188491 125.705489,174.36668 125.688518,174.598612 C125.671547,174.830545 125.711145,175.130355 125.807312,175.498052 C125.903479,175.86575 126.098639,176.332435 126.392796,176.898124 L126.426738,176.999947 L126.460679,177.067829 C126.754837,177.769283 127.003736,178.414158 127.207383,179.002473 C127.411031,179.590789 127.524167,180.167783 127.546795,180.733471 C127.614677,182.091123 127.111222,183.307334 126.036415,184.382142 C125.504668,184.913889 124.896562,185.31835 124.212079,185.595537 C123.527596,185.872724 122.817668,186.016973 122.082273,186.028286 C121.335565,186.028286 120.625637,185.889695 119.952468,185.612508 C119.279299,185.33532 118.67685,184.930859 118.145103,184.399112 Z M117.139272,127.278414 C116.683599,127.80857 115.167916,128.414722 114.447921,127.694727 C113.728229,126.975035 114.978683,125.117824 114.978683,125.117824 C116.077749,123.791677 116.001753,125.913815 116.683901,125.913512 C117.366049,125.913815 117.593129,126.747652 117.139272,127.278414 Z M122.634606,124.284592 C120.057098,125.875665 119.754627,124.89135 117.177422,123.299368 C114.600519,121.707689 115.130675,119.888325 115.130978,117.91818 C115.13128,115.947429 113.917765,115.037898 113.614992,111.930839 C113.311311,108.822872 105.771349,106.738884 103.383377,107.53427 C100.995707,108.330563 99.1345602,106.960514 100.806777,104.957669 C102.918923,102.428302 100.99934,99.4901907 103.421223,95.9771131 C106.220059,91.9175298 110.507328,94.6509664 110.507328,94.6509664 C112.250393,96.0149598 113.197771,94.9161958 114.220841,94.0445117 C115.243912,93.1728276 116.456519,94.1583544 117.896508,93.6278957 C119.335892,93.0974371 120.359568,93.3623636 120.624495,94.0826611 C120.889724,94.8026558 120.089192,95.4039634 121.150109,96.2371953 C122.211026,97.0710327 122.292472,95.3709611 123.921695,95.0297357 C126.568539,94.3042911 125.9639,96.2102485 128.081194,97.2660187 C129.971104,98.2088545 127.478069,98.5491716 126.308759,99.4641522 C124.916305,100.552622 127.360593,101.40614 127.588279,103.603668 C127.815359,105.801196 130.059817,103.972748 131.234879,102.645693 C132.409639,101.319547 133.389414,100.746094 134.114858,100.978624 C135.394378,101.389184 133.205025,103.707519 132.826255,104.313368 C132.447183,104.91952 133.129331,105.905047 132.901949,106.738582 C132.674566,107.572722 130.665969,108.974562 131.727189,110.187168 C132.788106,111.399472 132.182257,112.384999 132.182257,112.384999 C130.893957,114.204364 132.256739,114.750264 131.272726,117.76649 C128.885359,123.260916 125.210298,122.692308 122.634606,124.284592 Z" id="Combined-Shape" fill="#FFFFFF"></path>         </g>     </g> </svg> </a> ';


  var css =
  '@media only screen and (min-width: 768px) {' +
  '#pridecodes-voteyes-left-corner-svg {width: 150px;}' +
  '} @media only screen and (max-width: 767px) {' +
  '#pridecodes-voteyes-left-corner-svg {width: 100px;}' +
  '}' +
  '#pridecodes-voteyes-left-corner-svg { animation: enterIn 2s; }' +
  '@keyframes enterIn {0% {opacity: 0;}100% {opacity: 100;}}'+
  '#pridecodes-voteyes-left-corner-svg { transition: all .2s ease-in-out; }' +
  '#pridecodes-voteyes-left-corner-svg:hover { transform: scale(1.1); transform-origin:left top; }';

  var style = document.createElement('style');
  style.innerHTML = css;

  document.body.insertAdjacentHTML( 'beforeEnd', corner );
  document.body.appendChild(style);

}
