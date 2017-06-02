;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-weXin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M 386.693 269.869 c -175.743 31.3889 -234.326 229.949 -94.533 320.831 c 7.66456 4.92824 7.66456 4.37975 -3.83433 38.6922 l -9.85239 29.3791 l 35.4054 -18.9762 l 35.4054 -18.9793 l 18.7951 4.56395 c 19.7099 4.92517 44.8955 8.39213 61.6839 8.39213 l 10.0386 0 l -3.46798 -13.3224 c -27.5576 -101.469 67.7071 -202.024 191.621 -202.024 l 16.7904 0 l -3.46798 -12.0433 C 614.084 311.297 499.296 249.795 386.693 269.869 L 386.693 269.869 Z M 371.362 358.747 c 18.615 12.5938 19.7109 39.7841 1.82456 51.4672 c -29.0148 18.9793 -62.9599 -14.4184 -43.4332 -42.8888 C 338.332 354.55 358.954 350.351 371.362 358.747 L 371.362 358.747 Z M 521.011 358.747 c 30.6613 20.6217 7.66661 68.2545 -26.6459 55.1153 c -24.8182 -9.49014 -27.7388 -43.6174 -4.56088 -55.8439 C 498.928 353.091 513.164 353.454 521.011 358.747 L 521.011 358.747 Z M 588.717 433.936 c -87.0496 15.8776 -147.457 81.9423 -143.989 157.859 c 4.56292 101.652 123.735 171.731 238.158 140.341 l 13.5066 -3.65116 L 724.863 743.82 c 15.6944 8.57531 28.8337 14.7796 29.198 14.051 c 0.367367 -0.912789 -2.7353 -11.8663 -6.75075 -24.4539 c -9.1238 -28.1061 -9.30697 -26.0984 2.92256 -34.8579 C 887.831 599.824 767.019 401.634 588.717 433.936 L 588.717 433.936 Z M 585.253 515.878 c 7.66047 5.10835 11.6759 17.8864 8.39213 27.1903 c -6.93495 19.891 -36.6814 21.3513 -44.7123 2.19192 C 539.808 523.178 564.995 502.739 585.253 515.878 L 585.253 515.878 Z M 707.16 518.069 c 12.0433 11.4958 10.0366 31.0226 -4.01545 38.3228 c -21.5345 10.9504 -44.1638 -10.9473 -33.0333 -31.9343 C 677.411 510.95 696.209 507.666 707.16 518.069 L 707.16 518.069 Z M 707.16 518.069"  ></path>' +
    '' +
    '<path d="M 891.086 735.655 c 62.4636 -106.035 77.715 -236.226 41.4398 -353.855 c -34.5601 -112.067 -115.156 -207.813 -219.454 -261.327 c -110.072 -56.4763 -242.887 -64.1306 -358.392 -19.3865 c -109.517 42.4242 -200.169 128.146 -246.424 236.409 c -24.677 57.7585 -37.1696 119.934 -36.0582 182.805 c 1.10415 62.4933 16.0066 123.74 42.3956 180.279 c 49.6795 106.441 143.684 188.67 254.088 227.404 c 116.918 41.0203 249.385 28.319 357.473 -31.5148 c 16.7863 -9.29264 32.8635 -19.845 48.21 -31.3521 c 4.98862 -3.74018 8.79532 -7.42409 10.5155 -13.6744 c 1.62399 -5.9055 0.788969 -12.3462 -2.30653 -17.6305 c -5.76224 -9.83602 -21.3022 -15.7088 -31.305 -8.20794 c -23.2925 17.4648 -48.2775 32.4889 -74.64 44.8423 c -3.17634 1.48789 -6.38031 2.9154 -9.5935 4.32244 c -0.914836 0.400113 -6.42125 2.70869 -0.988514 0.438998 c -1.61785 0.676405 -3.24388 1.33132 -4.86991 1.98726 c -7.04649 2.83967 -14.1871 5.44092 -21.3769 7.88969 c -13.829 4.70926 -27.9311 8.59986 -42.1766 11.8274 c -6.8408 1.54929 -13.7297 2.88163 -20.6391 4.08197 c -3.4864 0.605797 -6.98407 1.14406 -10.4848 1.6598 c -6.19714 0.913812 4.98043 -0.62524 -1.23206 0.179079 c -2.44058 0.316202 -4.88526 0.594541 -7.33097 0.867764 c -15.2872 1.70585 -30.6726 2.47128 -46.0508 2.49687 c -15.3823 0.025583 -30.7585 -0.889253 -46.0488 -2.54394 c -1.83479 -0.198521 -3.66753 -0.421602 -5.49925 -0.64366 c -6.21863 -0.756223 4.96815 0.711198 -1.23615 -0.154519 c -3.58976 -0.500397 -7.16826 -1.0714 -10.7437 -1.66594 c -7.45786 -1.24025 -14.8727 -2.73427 -22.2508 -4.3818 c -14.1892 -3.16918 -28.1839 -7.1744 -41.9596 -11.8141 c -6.61363 -2.22671 -13.1546 -4.66218 -19.6465 -7.21943 c -1.62296 -0.639566 -3.23774 -1.2996 -4.85354 -1.95861 c -5.50743 -2.25025 4.50255 1.94223 -0.966001 -0.400113 c -3.74223 -1.6025 -7.44967 -3.28481 -11.1428 -4.9968 c -25.3985 -11.7793 -49.5004 -26.2969 -72.0162 -42.9164 c -1.3436 -0.991584 -2.67595 -2.00056 -4.00829 -3.00852 c -4.57315 -3.46082 3.86093 3.02592 -0.656963 -0.50756 c -2.63194 -2.05787 -5.22705 -4.16383 -7.80885 -6.28412 c -5.59544 -4.59567 -11.0425 -9.36734 -16.3913 -14.2465 c -10.2689 -9.36632 -20.0097 -19.3026 -29.2952 -29.6411 c -4.4565 -4.96099 -8.76359 -10.054 -12.9786 -15.2217 c -1.05401 -1.29141 -2.09164 -2.59613 -3.13029 -3.90084 c -0.664126 -0.833995 -4.16997 -5.3611 -0.522909 -0.627287 c -2.37407 -3.08118 -4.68674 -6.20942 -6.97383 -9.35609 c -8.17008 -11.239 -15.7118 -22.9282 -22.7194 -34.9234 c -7.30231 -12.4997 -13.8689 -25.422 -19.8255 -38.6134 c -0.714268 -1.58306 -1.41012 -3.1743 -2.10494 -4.76656 c -2.37202 -5.43376 1.8747 4.54246 -0.406253 -0.929162 c -1.33644 -3.20602 -2.6125 -6.4366 -3.8681 -9.67536 c -2.72097 -7.01681 -5.20658 -14.1237 -7.54177 -21.2776 c -4.53018 -13.8791 -8.23454 -28.0191 -11.2707 -42.2963 c -1.52166 -7.15496 -2.80591 -14.358 -3.94792 -21.5826 c -0.285502 -1.80614 -0.547469 -3.61534 -0.809435 -5.42557 c -0.890276 -6.15416 0.632403 5.00192 -0.150426 -1.16657 c -0.537236 -4.23239 -0.981351 -8.47604 -1.38965 -12.7228 c -2.90005 -30.209 -2.34235 -60.7312 1.30881 -90.8481 c 0.128937 -1.06424 0.964978 -7.10584 0.11768 -0.994654 c 0.245593 -1.76725 0.512676 -3.53245 0.780783 -5.29663 c 0.535189 -3.52836 1.13894 -7.04649 1.7652 -10.5605 c 1.35588 -7.6134 2.9727 -15.1777 4.75019 -22.7031 c 3.41887 -14.4736 7.70345 -28.7365 12.6542 -42.7578 c 2.36793 -6.70573 4.95178 -13.3337 7.66456 -19.9074 c -2.30039 5.57395 -0.073678 0.193405 0.350994 -0.789992 c 0.674359 -1.55952 1.36714 -3.11085 2.05992 -4.66218 c 1.61682 -3.61943 3.30835 -7.2051 5.02853 -10.7764 c 6.14393 -12.7545 13.0144 -25.1529 20.4211 -37.2156 c 7.40874 -12.0658 15.499 -23.7049 24.0907 -34.9561 c -3.57441 4.6806 -0.033769 0.076748 0.601704 -0.728594 c 1.05298 -1.33337 2.12234 -2.65446 3.19169 -3.97452 c 2.09675 -2.58999 4.24058 -5.14109 6.39873 -7.67889 c 4.67651 -5.49925 9.52698 -10.8491 14.4798 -16.0997 c 9.52596 -10.097 19.6096 -19.6618 30.0862 -28.7662 c 5.02955 -4.37054 10.188 -8.59168 15.4192 -12.7176 c 4.49334 -3.54371 -3.90801 2.97577 0.641613 -0.496304 c 1.32416 -1.01103 2.6606 -2.00568 3.99703 -3.00033 c 3.11801 -2.32188 6.28208 -4.58032 9.46354 -6.8142 c 23.3416 -16.3862 48.4495 -30.209 74.6328 -41.4869 c -5.50436 2.371 -0.116657 0.060375 0.856507 -0.339738 c 1.5851 -0.651846 3.17737 -1.28425 4.76963 -1.91665 c 3.18555 -1.26481 6.39464 -2.46924 9.60987 -3.65423 c 7.00044 -2.57873 14.0848 -4.92415 21.2131 -7.11914 c 14.4337 -4.44524 29.1346 -7.99714 43.9633 -10.8399 c 3.55906 -0.682545 7.1304 -1.29448 10.7058 -1.88391 c 1.78772 -0.294712 3.5785 -0.565888 5.37031 -0.837064 c 1.02331 -0.154519 7.13858 -0.99977 1.09391 -0.191358 c 7.78224 -1.04173 15.5983 -1.81535 23.4255 -2.4191 c 15.0569 -1.16248 30.1773 -1.41626 45.269 -0.953721 c 7.24091 0.222057 14.4726 0.677429 21.692 1.27197 c 3.6092 0.297782 7.21226 0.665149 10.8133 1.05503 c 1.8 0.195451 3.59794 0.414439 5.39487 0.632403 c 2.62785 0.337691 2.39556 0.298805 -0.695848 -0.11461 c 1.19624 0.163729 2.39147 0.332575 3.58566 0.506537 c 14.9372 2.14383 29.7383 5.19123 44.3521 8.94165 c 14.2741 3.66344 28.321 8.1844 42.1172 13.3572 c 3.20909 1.20341 6.39464 2.46617 9.57201 3.74735 c 0.974188 0.39295 6.38543 2.65855 0.862647 0.323365 c 1.57794 0.667196 3.14769 1.35383 4.71744 2.04047 c 6.80192 2.97577 13.5035 6.17463 20.1356 9.50856 c 12.7565 6.41306 25.1396 13.5578 37.1696 21.2438 c 5.74996 3.67367 11.3863 7.52232 16.948 11.4743 c 2.71688 1.92996 5.39794 3.90903 8.06775 5.90345 c 1.33439 0.997724 2.65753 2.0108 3.97964 3.02387 c -4.95894 -3.79851 1.00182 0.832971 1.92075 1.56668 c 21.7053 17.3225 41.5698 36.9178 59.4316 58.1698 c 2.14383 2.5511 4.24263 5.14007 6.32506 7.74131 c 1.04787 1.30881 2.07936 2.63092 3.11187 3.95201 c -3.65218 -4.67753 -0.122797 -0.12382 0.509606 0.713244 c 4.39203 5.81545 8.59577 11.7721 12.6777 17.8086 c 7.84978 11.6104 15.0426 23.6578 21.6849 35.9948 c 3.18862 5.9229 6.19817 11.941 9.09617 18.0102 c 1.449 3.03513 2.84275 6.09686 4.21807 9.16575 c 0.687662 1.53496 1.35588 3.0781 2.02512 4.62125 c 0.9967 2.33416 0.884137 2.06094 -0.338714 -0.819668 c 0.430812 1.03456 0.858554 2.0722 1.28118 3.11085 c 5.55655 13.5731 10.2975 27.4717 14.3795 41.5554 c 3.77702 13.0328 6.82955 26.2703 9.31618 39.6071 c 0.648776 3.48026 1.23104 6.97179 1.79181 10.4664 c 0.280386 1.74781 0.538259 3.49868 0.796132 5.24956 c 0.883113 5.9976 -0.641613 -5.07969 0.140193 0.933255 c 0.912789 7.02295 1.6025 14.0735 2.15611 21.1333 c 2.22364 28.3272 1.3917 56.8702 -2.1162 85.0552 c -0.340761 2.62887 -0.308015 2.40068 0.098237 -0.684592 c -0.24764 1.79795 -0.518816 3.59283 -0.788969 5.38771 c -0.542352 3.58976 -1.15327 7.16826 -1.78874 10.7427 c -1.27095 7.14984 -2.77418 14.2557 -4.41864 21.3277 c -3.13439 13.4831 -7.03728 26.782 -11.5122 39.8782 c -2.22774 6.51948 -4.65809 12.9684 -7.20715 19.3691 c -0.63752 1.60045 -1.29448 3.19271 -1.95144 4.78396 c 2.27788 -5.51767 0.025583 -0.080841 -0.387833 0.874927 c -1.36714 3.16202 -2.7926 6.29845 -4.23751 9.42567 c -5.78066 12.5099 -12.2572 24.6914 -19.2504 36.5638 c -6.33324 10.7509 -2.51529 25.0229 8.20794 31.305 C 870.568 750.182 884.766 746.382 891.086 735.655 L 891.086 735.655 Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.134 0c-282.956 0-512.134 229.239-512.134 512.003 0 282.759 229.178 511.997 512.134 511.997 282.688 0 511.866-229.238 511.866-511.997C1024 229.239 794.817 0 512.134 0L512.134 0zM512.134 959.933c-247.555 0-448.083-200.585-448.083-447.934S264.579 64.068 512.134 64.068c247.283 0 447.816 200.581 447.816 447.931C959.95 759.351 759.417 959.933 512.134 959.933L512.134 959.933zM512.134 959.933"  ></path>' +
    '' +
    '<path d="M666.711 487.305c-23.959-4.639-12.328-17.524-12.328-17.524s23.441-38.651-4.638-66.738c-34.776-34.784-119.311 4.437-119.311 4.437-32.273 10.029-23.735-4.584-19.173-29.413 0-29.266-10.009-78.796-96.014-49.53-85.931 29.41-159.683 132.447-159.683 132.447-51.3 68.487-44.531 121.404-44.531 121.404 12.827 116.837 136.941 148.92 233.468 156.52 101.572 7.953 238.624-35.026 280.207-123.335C766.261 527.117 690.743 492.109 666.711 487.305L666.711 487.305zM452.013 705.962c-100.799 4.713-182.315-45.862-182.315-113.156 0-67.382 81.517-121.404 182.315-126.058 100.907-4.657 182.571 36.937 182.571 104.154C634.584 638.195 552.92 701.364 452.013 705.962L452.013 705.962zM452.013 705.962"  ></path>' +
    '' +
    '<path d="M431.917 511.12C330.492 522.993 342.232 618.002 342.232 618.002s-1.047 30.096 27.18 45.407c59.342 32.138 120.431 12.681 151.308-27.184C551.594 596.34 533.453 499.342 431.917 511.12L431.917 511.12zM406.341 644.472c-18.953 2.226-34.187-8.708-34.187-24.536 0-15.791 13.541-32.303 32.494-34.273 21.752-2.078 35.881 10.455 35.881 26.303C440.529 627.74 425.185 642.318 406.341 644.472L406.341 644.472zM466.107 593.544c-6.405 4.784-14.317 4.122-17.7-1.62-3.534-5.616-2.211-14.615 4.285-19.326 7.525-5.598 15.329-3.978 18.715 1.617C474.793 579.96 472.362 588.592 466.107 593.544L466.107 593.544zM466.107 593.544"  ></path>' +
    '' +
    '<path d="M716.08 446.185c8.172 0 15.105-6.054 16.284-13.951 0.15-0.589 0.224-1.103 0.224-1.767 12.383-111.372-91.231-92.211-91.231-92.211-9.2 0-16.599 7.454-16.599 16.75 0 9.129 7.398 16.565 16.599 16.565 74.412-16.42 57.999 58.014 57.999 58.014C699.356 438.808 706.862 446.185 716.08 446.185L716.08 446.185zM716.08 446.185"  ></path>' +
    '' +
    '<path d="M703.994 251.769c-35.81-8.394-72.669-1.161-82.989 0.827-0.811 0.073-1.546 0.811-2.282 0.958-0.367 0.074-0.591 0.441-0.591 0.441-10.155 2.89-17.606 12.313-17.606 23.45 0 13.269 10.763 24.183 24.158 24.183 0 0 13.066-1.746 21.898-5.207 8.759-3.534 82.986-2.634 119.825 59.282 20.132 45.187 8.851 75.429 7.434 80.286 0 0-4.785 11.742-4.785 23.3 0 13.345 10.784 21.721 24.106 21.721 11.131 0 20.499-1.511 23.22-20.358l0.147 0C856.093 328.721 768.101 266.731 703.994 251.769L703.994 251.769zM703.994 251.769"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qq" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.9975 83.275c235.8 0 428.7375 192.9375 428.7375 428.7375s-192.9375 428.7375-428.7375 428.7375S83.275 747.81 83.275 512.01 274.25 83.275 511.9975 83.275M511.9975 44.2875c-259.1875 0-467.7125 208.525-467.7125 467.725s208.525 467.7 467.7125 467.7c259.2 0 467.7125-208.5 467.7125-467.7S769.235 44.2875 511.9975 44.2875L511.9975 44.2875z"  ></path>' +
    '' +
    '<path d="M290.725 537.0225c-19.2875 48.0375-22.475 93.8375-6.95 102.375 10.75 5.8875 27.4875-7.6125 43.225-32.2125 6.25 26.95 21.675 51.1 43.7 70.625-23.0625 8.975-38.175 23.675-38.175 40.275 0 27.35 40.8 49.425 91.1375 49.425 45.4125 0 83.025-17.925 89.9625-41.55 1.8375 0 9.05 0 10.8125 0 7.0625 23.625 44.6 41.55 90.075 41.55 50.3875 0 91.15-22.075 91.15-49.425 0-16.6-15.0875-31.1875-38.2-40.275 21.925-19.525 37.45-43.675 43.6625-70.625 15.7375 24.6 32.4 38.1 43.1875 32.2125 15.625-8.5375 12.5-54.3375-6.975-102.375-15.2-37.625-35.8125-65.4-51.55-71.6125 0.2125-2.3 0.4-4.825 0.4-7.25 0-14.575-3.9-28.0375-10.5125-39 0.125-0.875 0.125-1.7 0.125-2.575 0-6.725-1.5-12.9875-4.125-18.375-3.95-97.95-64.525-175.8125-162.6125-175.8125-98.0625 0-158.7125 77.8625-162.6875 175.8125-2.55 5.475-4.125 11.75-4.125 18.45 0 0.875 0 1.7 0.125 2.5875-6.5 10.875-10.375 24.3375-10.375 38.9625 0 2.4625 0.125 4.9 0.275 7.3C326.625 471.6875 305.9 499.3975 290.725 537.0225z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-youdou" viewBox="0 0 1034 1024">' +
    '' +
    '<path d="M517.265578 11.770115c-279.38536 0-506.114943 226.729583-506.114943 506.114942s226.729583 506.114943 506.114943 506.114943 506.114943-226.729583 506.114942-506.114943c0.61948-279.38536-226.110103-506.114943-506.114942-506.114942z m-0.61948 953.37931c-246.552934 0-446.025408-199.472474-446.025408-446.025408s199.472474-446.025408 446.025408-446.025408 446.025408 199.472474 446.025408 446.025408-199.472474 446.025408-446.025408 446.025408z" fill="" ></path>' +
    '' +
    '<path d="M249.030853 685.764065h313.456745c25.398669-42.124622 48.319419-83.629764 68.142771-123.895946l47.08046 22.30127c-23.54023 36.549304-45.8415 70.62069-66.903811 100.975197h174.073805v40.266182h-536.46945V685.764065z m16.725953-430.538415h503.637023v40.266183h-503.637023v-40.266183z m52.655777 308.500908v-201.330914h397.08651v201.330914h-42.124622v-21.062311h-312.837266v21.062311h-42.124622z m42.124622-161.684211v100.975197h312.837266v-100.975197h-312.837266z m6.194797 180.888083l37.168784-22.301271c23.54023 31.593466 45.222021 63.186933 66.284332 94.780399l-40.266183 25.398669c-21.062311-37.168784-42.124622-69.38173-63.186933-97.877797z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)