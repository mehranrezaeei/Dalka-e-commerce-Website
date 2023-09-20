const icons = {
  burgorIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      role="presentation"
      className="icon icon-hamburger"
      fill="none"
      viewBox="0 0 18 16"
    >
      <path
        d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  exitIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.2"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
  searchIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.2"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  ),
  arrowUpRight: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.2"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  ),
  arrowRight: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-4 h-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  ),
  subBottomIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.2"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  ),
  accountsIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.2"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  ),
  instagramIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      role="presentation"
      className="icon icon-instagram"
      viewBox="0 0 18 18"
    >
      <path
        fill="currentColor"
        d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"
      />
      <path
        fill="currentColor"
        d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z"
      ></path>
    </svg>
  ),
  shoppingCartIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.2"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
  ),
  doneIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-checkmark color-foreground-text"
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 12 9"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.35.643a.5.5 0 01.006.707l-6.77 6.886a.5.5 0 01-.719-.006L.638 4.845a.5.5 0 11.724-.69l2.872 3.011 6.41-6.517a.5.5 0 01.707-.006h-.001z"
        fill="currentColor"
      />
    </svg>
  ),
  zaraIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ZARA Germany logo. Go to home page"
      class="layout-catalog-logo-icon"
      viewBox="0 0 132 55"
      className="h-12"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M105.673.035l19.557 53.338 6.77.002v.383h-21.548v-.383h6.344l-6.431-17.54H97.311v.007l.07.204c.521 1.548.78 3.17.764 4.803v6.575c0 3.382 1.494 6.81 4.347 6.81 1.675 0 3.012-.59 4.604-2.046l.227.211C105.594 54.224 103.5 55 100.36 55c-2.37 0-4.398-.57-6.03-1.693l-.309-.222c-2.148-1.624-3.542-4.278-4.142-7.89l-.096-.583-.1-.882-.01-.152-3.599 9.792h5.107v.384H80.496v-.384h5.162l3.951-10.753v-.023a34.924 34.924 0 0 1-.075-1.906v-4.693c0-5.77-4.29-9.08-11.771-9.08H70.41v26.458h6.371v.383h-24.9v-.383h6.345l-6.431-17.54H33.948l-6.371 17.346.266-.044c8.366-1.442 12.213-7.827 12.265-14.55h.388v15.171H0L30.06 2.185H17.972C7.954 2.185 3.42 9.922 3.35 17.635h-.387V1.8h36.488l-.222.385L9.396 53.373h15.695c.39 0 .778-.019 1.169-.05.26-.018.522-.044.788-.077l.095-.01L46.703 0h.387l.013.035 15.369 41.916V2.185h-6.328v-.39h21.778c10.467 0 17.774 5.372 17.774 13.068 0 5.612-5.005 10.27-12.45 11.595l-1.367.174 1.377.14c4.515.517 8.1 1.906 10.641 4.127l.017.016L105.273 0h.386l.014.035zm-8.552 35.32l.038.094h13.061l-8.773-23.928-7.221 19.67.039.037.367.364a11.876 11.876 0 0 1 2.489 3.762zM70.415 26.53V2.185h5.611c7.496 0 11.454 4.414 11.454 12.76 0 8.877-2.272 11.585-9.717 11.585h-7.348zM42.882 11.521L34.09 35.45h17.565L42.882 11.52z"
      />
    </svg>
  ),
  diorIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 494.5 138.3"
      className="w-40"
    >
      <path d="M1.5 2.7h64.2c55.2 0 76.8 32.4 76.8 66.7 0 34.9-27.7 66-80.4 66H1.6c-1.1 0-1.5-.7-1.5-1.3 0-.7.7-1.3 1.7-1.3h11.3c3.5 0 5.8-2.1 5.8-6V11.5c0-2.9-1.4-6.1-6-6.1H1.4C.5 5.4 0 4.8 0 4.1c0-.6.2-1.4 1.5-1.4m40.1 126.5c0 2.9 1.3 3.8 3.2 3.8h17c41.9 0 57.1-32.1 57.1-64.3S102.8 5.3 67.4 5.3H44.3c-2.4 0-2.6 2-2.6 2.9l-.1 121zM148.9 2.7c-1 0-1.9.4-1.9 1.2 0 .8.5 1.3 1.4 1.3h11.3c2.6 0 5.1 1.8 5.1 6.8v114.9c0 2.4-1.8 6-5 6h-11.2c-1.3 0-1.4 1-1.4 1.4 0 .4-.1 1.1 1.4 1.1H203c.8 0 1.9-.1 1.9-.9s-.2-1.6-1.6-1.6h-10.5c-1.5 0-5.6-.9-5.6-5.5V10.8c0-3.3 2.1-5.5 5.9-5.5h10.3c.9 0 1.4-.5 1.4-1.2s-.5-1.3-1.7-1.3h-54.2zm85 66.4c0-36.7 16.4-66.4 47.2-66.4 30.2 0 47.2 29.7 47.2 66.4s-15.5 66.4-47.2 66.4c-30.7.1-47.2-29.7-47.2-66.4m47.2 69.2c43.8 0 71.4-31 71.4-69.1S325.2 0 281.1 0c-44 0-71.4 31-71.4 69.1s28.5 69.2 71.4 69.2m211.4-3.7c-17.2 1.8-26.7-26.4-35.4-39.8-6.5-9.9-20.3-20-33.9-22 22.4-1.3 47.5-8.5 47.5-33.9 0-20.6-12.7-36.2-59.3-36.2h-53.7c-.7 0-1.4.4-1.4 1.2 0 .8.7 1.3 1.4 1.3H370c2.6 0 5.1 1.8 5.1 6.8v114.9c0 2.4-1.8 6-5 6H358c-1 0-1.4.8-1.4 1.2s.4 1.3 1.4 1.3h57c.8 0 1.5-.4 1.5-1.2 0-.8-.5-1.3-1.6-1.3h-11.5c-1.5 0-5.6-1-5.6-5.5V73.1h5.9c28.2 0 30.3 30.6 44.3 48.1 12 15 27.7 16.9 36.6 16.9 3.8 0 6.4-.1 8.8-.7 1.5-.5 1.8-3.1-.9-2.8m-89-129.4h8.3c14.2 0 37.2 5.6 37.2 32.4 0 24.6-20.4 32.9-39.3 32.9h-12.1V10.8c0-3.4 2.1-5.6 5.9-5.6" />
    </svg>
  ),
  louisvuittonIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 151 16"
      aria-hidden="true"
      className="w-52"
    >
      <path
        d="M67.637.293l3.816 9.205L75.269.293h2.725L71.746 15.39l-.293.294-.294-.294L64.911.293h2.726zm-13.712 0c1.468 0 2.86.767 3.627 1.887l-1.467 1.468h-.462c-.304-.65-.973-1.048-1.698-1.048-.863 0-1.672.71-1.72 1.614-.035.68.277 1.105.84 1.468.606.391.854.554 1.677 1.006.897.493 3.166 1.46 3.166 4.005 0 2.509-2.097 4.843-4.802 4.843-.347 0-.976-.039-1.446-.147-1.325-.321-2.129-.822-2.998-1.845l1.887-1.929.65.545c.293.23.937.693 1.55.776 1.246.169 2.082-.655 2.244-1.468.129-.642-.034-1.6-1.069-2.096 0 0-1.866-1.037-2.684-1.51-.833-.482-1.719-1.798-1.719-3.375 0-1.174.538-2.311 1.405-3.103.67-.614 1.589-1.09 3.019-1.09zM138.67 0l9.77 9.77V.587l.294-.294h1.929l.294.294v14.802h-.462l-9.602-9.602v9.309l-.294.293h-1.929l-.293-.293V.293L138.67 0zm-28.807.293v2.223l-.294.293h-2.222v12.58h-2.516V2.809h-2.516V.587l.294-.294h7.254zm9.225 0v2.223l-.294.293h-2.222v12.58h-2.516V2.809h-2.516V.587l.294-.294h7.254zM2.516.293v12.58h5.032v2.516H0V.587L.293.293h2.223zm14.257 0a7.548 7.548 0 110 15.096 7.548 7.548 0 010-15.096zm111.54 0a7.548 7.548 0 110 15.096 7.548 7.548 0 010-15.096zm-98.415 0l.293.294v9.77a2.516 2.516 0 005.032 0V.587l.294-.294h1.929l.293.294v9.77a5.032 5.032 0 01-10.064 0V.587l.294-.294h1.929zm15.389 0v14.803l-.294.293h-2.222V.587l.293-.294h2.223zm37.446 0l.293.294v9.77a2.516 2.516 0 005.032 0V.587l.294-.294h1.928l.294.294v9.77a5.032 5.032 0 01-10.064 0V.587l.294-.294h1.929zm15.389 0v14.803l-.294.293h-2.222V.587l.293-.294h2.223zM16.772 2.81a5.032 5.032 0 10.001 10.065 5.032 5.032 0 000-10.065zm111.541 0a5.032 5.032 0 100 10.065 5.032 5.032 0 000-10.065z"
        fill-rule="evenodd"
      />
    </svg>
  ),
  gucciIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1312 210"
      className="w-40"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 104.57C0 44.8817 47.7192 0 111.198 0C137.048 0 159.565 7.14969 180.162 21.426C191.548 29.3368 196.801 35.3334 196.801 42.5984V77.4244H196.547C179.028 35.8408 147.277 9.96344 111.198 9.96344C68.2 9.96344 36.5878 49.8865 36.5878 104.709C36.5878 159.923 68.7092 198.831 112.98 198.831C140.357 198.831 164.68 180.08 164.68 160.707V136.998C164.68 126.803 160.584 118.639 153.155 114.303V114.049H208.442V114.303C201.013 118.639 196.917 126.803 196.917 136.998V165.066C196.917 172.977 191.548 181.649 173.752 192.096C154.937 203.19 132.674 209.187 110.273 209.187C47.3489 209.14 0 164.259 0 104.57ZM360.347 189.375C346.392 177.774 338.593 161.837 338.593 141.933V29.3369C338.593 19.1428 334.497 10.9783 327.069 6.64232V6.38862H382.355V6.64232C374.927 10.9783 370.83 19.1428 370.83 29.3369V137.09C370.83 154.434 376.199 168.087 386.058 178.028C397.328 189.375 414.338 196.017 435.443 196.271C474.739 196.663 500.195 173.692 500.195 140.157V29.3369C500.195 19.1428 496.099 10.9783 488.67 6.64232V6.38862H521.44V6.64232C514.011 10.9783 509.915 19.1428 509.915 29.3369V140.296C509.915 181.349 476.521 209.163 426.094 209.163C397.444 209.14 375.436 201.76 360.347 189.375ZM632.522 104.709C632.522 44.9047 680.241 0 743.72 0C769.431 0 792.088 7.14969 812.684 21.426C824.07 29.3368 829.323 35.3334 829.323 42.5984V77.4244H829.069C811.55 35.8408 779.799 9.96344 743.073 9.96344C700.722 9.96344 669.11 49.8865 669.11 104.709C669.11 159.3 700.722 199.085 744.345 199.085C779.545 199.085 812.8 173.323 834.438 130.609H834.692L829.948 166.819C829.046 173.715 824.07 179.965 812.684 187.853C792.088 202.129 769.431 209.14 743.72 209.14C679.478 208.887 632.522 164.259 632.522 104.709ZM944.872 104.709C944.872 44.9047 992.592 0 1056.07 0C1081.78 0 1104.44 7.14969 1125.03 21.426C1136.42 29.3368 1141.67 35.3334 1141.67 42.5984V77.4244H1141.42C1123.9 35.8408 1092.15 9.96344 1055.42 9.96344C1013.07 9.96344 981.46 49.8865 981.46 104.709C981.46 159.3 1013.07 199.085 1056.7 199.085C1091.89 199.085 1125.15 173.323 1146.79 130.609H1147.04L1142.3 166.819C1141.4 173.715 1136.42 179.965 1125.01 187.853C1104.41 202.129 1081.76 209.14 1056.05 209.14C991.851 208.887 944.872 164.259 944.872 104.709ZM1268.24 179.827V29.3369C1268.24 19.1428 1264.14 10.9783 1256.71 6.64232V6.38862H1312V6.64232C1304.57 10.9783 1300.48 19.1428 1300.48 29.3369V179.827C1300.48 190.021 1304.57 198.185 1312 202.521V202.775H1256.71V202.521C1264.14 198.185 1268.24 190.021 1268.24 179.827Z"
        fill="var(--_g-logo-fill-color)"
      ></path>
    </svg>
  ),
  twitterIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="twitter"
      role="img"
      viewBox="0 0 512 512"
      data-fa-i2svg=""
      className="w-8 h-8"
    >
      <path
        fill="currentColor"
        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
      />
    </svg>
  ),
  instagramIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="800"
      width="1200"
      viewBox="-100.7682 -167.947 873.3244 1007.682"
      className="w-10 h-10"
    >
      <g fill="#100f0d">
        <path d="M335.895 0c-91.224 0-102.663.387-138.49 2.021-35.752 1.631-60.169 7.31-81.535 15.612-22.088 8.584-40.82 20.07-59.493 38.743-18.674 18.673-30.16 37.407-38.743 59.495C9.33 137.236 3.653 161.653 2.02 197.405.386 233.232 0 244.671 0 335.895c0 91.222.386 102.661 2.02 138.488 1.633 35.752 7.31 60.169 15.614 81.534 8.584 22.088 20.07 40.82 38.743 59.495 18.674 18.673 37.405 30.159 59.493 38.743 21.366 8.302 45.783 13.98 81.535 15.612 35.827 1.634 47.266 2.021 138.49 2.021 91.222 0 102.661-.387 138.488-2.021 35.752-1.631 60.169-7.31 81.534-15.612 22.088-8.584 40.82-20.07 59.495-38.743 18.673-18.675 30.159-37.407 38.743-59.495 8.302-21.365 13.981-45.782 15.612-81.534 1.634-35.827 2.021-47.266 2.021-138.488 0-91.224-.387-102.663-2.021-138.49-1.631-35.752-7.31-60.169-15.612-81.534-8.584-22.088-20.07-40.822-38.743-59.495-18.675-18.673-37.407-30.159-59.495-38.743-21.365-8.302-45.782-13.981-81.534-15.612C438.556.387 427.117 0 335.895 0zm0 60.521c89.686 0 100.31.343 135.729 1.959 32.75 1.493 50.535 6.965 62.37 11.565 15.68 6.094 26.869 13.372 38.622 25.126 11.755 11.754 19.033 22.944 25.127 38.622 4.6 11.836 10.072 29.622 11.565 62.371 1.616 35.419 1.959 46.043 1.959 135.73 0 89.687-.343 100.311-1.959 135.73-1.493 32.75-6.965 50.535-11.565 62.37-6.094 15.68-13.372 26.869-25.127 38.622-11.753 11.755-22.943 19.033-38.621 25.127-11.836 4.6-29.622 10.072-62.371 11.565-35.413 1.616-46.036 1.959-135.73 1.959-89.694 0-100.315-.343-135.73-1.96-32.75-1.492-50.535-6.964-62.37-11.564-15.68-6.094-26.869-13.372-38.622-25.127-11.754-11.753-19.033-22.943-25.127-38.621-4.6-11.836-10.071-29.622-11.565-62.371-1.616-35.419-1.959-46.043-1.959-135.73 0-89.687.343-100.311 1.959-135.73 1.494-32.75 6.965-50.535 11.565-62.37 6.094-15.68 13.373-26.869 25.126-38.622 11.754-11.755 22.944-19.033 38.622-25.127 11.836-4.6 29.622-10.072 62.371-11.565 35.419-1.616 46.043-1.959 135.73-1.959" />
        <path d="M335.895 447.859c-61.838 0-111.966-50.128-111.966-111.964 0-61.838 50.128-111.966 111.966-111.966 61.836 0 111.964 50.128 111.964 111.966 0 61.836-50.128 111.964-111.964 111.964zm0-284.451c-95.263 0-172.487 77.224-172.487 172.487 0 95.261 77.224 172.485 172.487 172.485 95.261 0 172.485-77.224 172.485-172.485 0-95.263-77.224-172.487-172.485-172.487m219.608-6.815c0 22.262-18.047 40.307-40.308 40.307-22.26 0-40.307-18.045-40.307-40.307 0-22.261 18.047-40.308 40.307-40.308 22.261 0 40.308 18.047 40.308 40.308" />
      </g>
    </svg>
  ),
  youtubeIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="800"
      width="1200"
      viewBox="-35.20005 -41.33325 305.0671 247.9995"
      className="w-10 h-10"
    >
      <path
        d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.554 7.652 7.602 15.655 4.904 25.817 0 44.237 0 82.667 0 82.667s0 38.43 4.904 56.85c2.698 10.162 10.65 18.164 20.747 20.881 18.3 4.935 91.682 4.935 91.682 4.935s73.383 0 91.683-4.935c10.097-2.717 18.048-10.72 20.747-20.88 4.904-18.422 4.904-56.851 4.904-56.851s0-38.43-4.904-56.85"
        fill="#282828"
      />
      <path d="M93.333 117.558l61.334-34.89-61.334-34.893z" fill="#fff" />
    </svg>
  ),
  linkedinIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 30 30"
      className="w-8 h-8"
    >
      <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
    </svg>
  ),
  lockClosedIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  ),
  starIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  ),
};

export default icons;
