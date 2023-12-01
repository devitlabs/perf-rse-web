'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "859b63f317c2677156831cdb8afbefb2",
"assets/AssetManifest.bin.json": "9eb0879d5169ae69d4b9d48fa4e91747",
"assets/AssetManifest.json": "10c1bb69a842f1248582e127cc0156d8",
"assets/assets/gifs/perfrse.gif": "5f3dbad505fdcdc249a36d718d1b77d6",
"assets/assets/icons/admin.png": "6eeff04c9a4d6c3dd7c9fc29fbcb84fb",
"assets/assets/icons/administrateur.png": "8990ef5e4e09cca5e1d2a96c950dfa77",
"assets/assets/icons/analysis.png": "231936ea341b86b7c82502c3f5be9f8f",
"assets/assets/icons/back.png": "2a6a59a71775a6238537c2a045f16ad3",
"assets/assets/icons/bell.png": "0ccdea7c74fcec468ad0a45e0bdace24",
"assets/assets/icons/casque.png": "eba0425ca609a4711418d9a1865ad97b",
"assets/assets/icons/cloche.png": "c9cfd61d2b9a91898e933414bd605a07",
"assets/assets/icons/data_collect.png": "cda88c5193981679f91c24ea9fc94dcd",
"assets/assets/icons/data_not_validated.png": "3d79e51ca347a8b1e4236cdaf2e3e2a7",
"assets/assets/icons/data_validated.png": "5f48db5990d1511b96a5d26cc477c2dc",
"assets/assets/icons/Documents.svg": "0d66436fde3818811c82319665ef91fd",
"assets/assets/icons/doc_file.svg": "c6c3abe38f2b4e22ab33399b26966b1f",
"assets/assets/icons/drop_box.svg": "d427e188a7aee4612446d0e9d26e76f1",
"assets/assets/icons/economie.png": "b7869a68a18ec0091d6b22bbd8c33948",
"assets/assets/icons/environnement.png": "c76e7a92f2393f8b207b5629a6fcce66",
"assets/assets/icons/excle_file.svg": "9986607c30659e3d222f9908141884f9",
"assets/assets/icons/Figma_file.svg": "90224db6835092a278153e0f60e8c203",
"assets/assets/icons/folder.svg": "8c11f522cd36f0cbd9c02eb2b689cbb9",
"assets/assets/icons/google_drive.svg": "a4cd4325c28cee54264a4942fcf6ef48",
"assets/assets/icons/gouvernance.png": "e0fbe5c48ffd7f7e6fef0c2d9173c10d",
"assets/assets/icons/home.png": "4162b0104e0b8d96f498e7fa9e95953c",
"assets/assets/icons/logo.svg": "6194acb4fae31a2a2ee26ff61d8c644e",
"assets/assets/icons/media.svg": "e790cb1d2138f7a9d1b404abf8346eb1",
"assets/assets/icons/media_file.svg": "5b8f2b094278f5d9378bca249cf80fc1",
"assets/assets/icons/menu_dashbord.svg": "5e8d164243b3e28c22a8a5e35719c96e",
"assets/assets/icons/menu_doc.svg": "c5a576281e34f54d9e041410d002443c",
"assets/assets/icons/menu_notification.svg": "f49436dd0acd00dc43ab287c7ac3ff4f",
"assets/assets/icons/menu_profile.svg": "134c2274ffaca9441fe7523b2f476608",
"assets/assets/icons/menu_setting.svg": "32ab0402dc07a66d078c758ddb0aa798",
"assets/assets/icons/menu_store.svg": "45f31f1388616a22053ea6a99ed5904a",
"assets/assets/icons/menu_task.svg": "fa731cbcb073759bd82c699331ef7e93",
"assets/assets/icons/menu_tran.svg": "acdaeac5ea677c4a479a1d656ea3d5c1",
"assets/assets/icons/monitoring.png": "1c4cd7f75aca760b9fa839f9b4b36e15",
"assets/assets/icons/no_data.png": "c387716e2d7a228e8270094d983ed1c6",
"assets/assets/icons/one_drive.svg": "0b0ca635ef35ec9beebb18aaf20cd5d9",
"assets/assets/icons/page-daccueil.png": "7351f8bbc53bd6e4927191b3d4f14ccd",
"assets/assets/icons/pdf_file.svg": "4ea6d2b9e631ee54164987b57fa240c7",
"assets/assets/icons/performance.png": "6c92a649ff3c7db091819405b9be8f06",
"assets/assets/icons/profil.png": "e9ace2e2dac30ed544ae393f52a0a0e0",
"assets/assets/icons/Search.svg": "82ad5e39b306dc6a42809cbeef651e64",
"assets/assets/icons/social.png": "a1993f62eee38de35276410b25d8a166",
"assets/assets/icons/sound_file.svg": "d346e8558ced623138787011e0ca7e88",
"assets/assets/icons/table.png": "a2ab9d8df567e63dd5a42e152f779740",
"assets/assets/icons/unknown.svg": "2fc91e195e7a0d6279c01552403c3b89",
"assets/assets/icons/xd_file.svg": "fd95a4cd96e6c7251ebeac76b7b7c8b9",
"assets/assets/images/analyse-exploratoire.png": "7941c11cd4027b031357c15f2d8b2d76",
"assets/assets/images/audit.png": "99dd2d3cee9b40a762ec4f59a64d9db5",
"assets/assets/images/audit_rse.png": "c572fe36762c8e271fab9eb3554ebc04",
"assets/assets/images/background_image.jpg": "11996b6606af61d7e2940d5d48ac66ee",
"assets/assets/images/bannieresifca.png": "1080459da3eadd700179b0a4c4f7c074",
"assets/assets/images/continuer.png": "996cd95bf0eb7875b6657cb5f194b246",
"assets/assets/images/cover_image_perf_rse.png": "5a849b56f45fb4f9bb9a87ad1c9df744",
"assets/assets/images/error.png": "34a3c86257800bf5e90595c112370b19",
"assets/assets/images/fond_accueil.jpg": "587ef154de47831cc26dfd845bcabc7d",
"assets/assets/images/forbidden.png": "807c3bb0fd688ffffcf8cccc9accd3fe",
"assets/assets/images/gouvernance-strategie-dd-2021-2025.png": "855743843230642f19f29b36ba151d37",
"assets/assets/images/home1.png": "4162b0104e0b8d96f498e7fa9e95953c",
"assets/assets/images/homme-daffaire.png": "cab75b3c8250ded03ddb962a17e3fcd1",
"assets/assets/images/jouer.png": "a5b7d052cd34852ea5fa9b2f54f5e241",
"assets/assets/images/logo.png": "5315be9d0a7602fb12a0ad4c2e3006e9",
"assets/assets/images/monthly-average-rainfall.png": "51a7ac72e3f73416f0b167bda8c13e90",
"assets/assets/images/new_verion_app.png": "4583f39a14fbd4983fd7b8c3cd98af81",
"assets/assets/images/organigramme.png": "a928390f2530566d7ffe0c30ee4f4eac",
"assets/assets/images/password_change.png": "8ef01e27113751ce0185e78767187919",
"assets/assets/images/person1.png": "69c9de1bfade376650a9357c198f9cc9",
"assets/assets/images/person2.png": "e0b028f387570db89c58b256aaba1b4a",
"assets/assets/images/person3.png": "5909d1fdcaad7f396375253e701b1436",
"assets/assets/images/person4.png": "5185e320c2ff713d736a5f4e1567c796",
"assets/assets/images/person5.png": "1ab12cea46d84e1d1fc5f3f0d55bd0e1",
"assets/assets/images/pilotage_rse.jpg": "9a8087534113e365d87c0b6c712660fa",
"assets/assets/images/politique-durabilite.jpg": "6f8a846791d09bb914302db1ee47b98a",
"assets/assets/images/profile-user.png": "5700c04197ee9a4372a35ef16eb78f4e",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/assets/images/profil_person.png": "d46eeb6e1eb91ea94073206f9606fe02",
"assets/assets/images/rapport.png": "46e0305f4a8592db73fcdc9af97b71f2",
"assets/assets/images/reporting_rse.jpg": "69d05c8a192cb3b62ca9116ba015d629",
"assets/assets/images/res.png": "cd77092d19f56407749a83b92ef7f223",
"assets/assets/images/resultats.png": "b74ae2944cb5b775b4efe1fbcf70bdc3",
"assets/assets/images/return.png": "9cce80841e2183a92608ab1188ccc168",
"assets/assets/images/search.png": "01a5965bf040dc0f2241b997786e2eee",
"assets/assets/images/shield.png": "1daec18222c7ac73ea79ba442f5145e5",
"assets/assets/images/soleil%2520(1).png": "e8da7f3bc5e734e3a6b8a6d4760cb1bb",
"assets/assets/images/soleil.png": "22a1a27c3347e16ec275597b94e7714c",
"assets/assets/images/strategie.jpg": "6a0cb984c5c4b58602011e4ccff35a72",
"assets/assets/images/une-langue-etrangere.png": "2844982c39e96208a9569fc14efc7523",
"assets/assets/logos/logo_sifca_blanc.jpg": "0c3d9de8d9d4f451efddd0dd9d26bb02",
"assets/assets/logos/logo_sifca_bon.png": "f2a1be0c109547c4ecfdb2349f1617fc",
"assets/assets/logos/logo_sucrivoire.png": "bde46fa04b156e49d7c12b7f591cc97d",
"assets/assets/logos/perf_rse.png": "5335d1d63c56e530b0a54d2a9074bbc6",
"assets/assets/logos/perf_rse_old.png": "15b56804f5d9c804ec31a87efa059f38",
"assets/FontManifest.json": "74a3cf565c463b0908484103a9ce5bf4",
"assets/fonts/MaterialIcons-Regular.otf": "dbc1fa22e52f671acf49ac54cfb66eaa",
"assets/logo.png": "404a3467968c0ea3506e62493d7a6dd7",
"assets/NOTICES": "f07bbb8a8db94db1e1ca1fca7d114e76",
"assets/packages/animated_icon/assets/activity.json": "8c7cbe8cfb2c35ccc4751194573222a3",
"assets/packages/animated_icon/assets/add.json": "b7bb068a9790921472e8c717fe5ca168",
"assets/packages/animated_icon/assets/alphabetical_sorting.json": "3f2b896ddd3d7f9d9359787eef3e846a",
"assets/packages/animated_icon/assets/angel.json": "ec103cc7e54b24104083c19f44d59ac4",
"assets/packages/animated_icon/assets/battery.json": "31acf00bd98d26ed21250a6d236ee37f",
"assets/packages/animated_icon/assets/bell.json": "668dba34f67b4ed2fe0361a4391cc4aa",
"assets/packages/animated_icon/assets/birthday_cake.json": "715293a88d166b3d166c77c51133d30e",
"assets/packages/animated_icon/assets/block_mic.json": "8688283117e0044ec752ec2421b5c7cd",
"assets/packages/animated_icon/assets/bookmark.json": "37e02b2261b19c5944081d94883e24e3",
"assets/packages/animated_icon/assets/calculator.json": "fe1abd248aff9fbc9f30a33fae8ca1e0",
"assets/packages/animated_icon/assets/calendar-tear.json": "4d6e4bf2c0bd0e845ca1ff161003ebe8",
"assets/packages/animated_icon/assets/calendar.json": "b74760ba851d59bd1acf3307bb0e9c12",
"assets/packages/animated_icon/assets/chat-message.json": "3d3b60d909f1ef7ae22be6f173003fef",
"assets/packages/animated_icon/assets/checkbox.json": "2930689eeba8a91e48be3089dccc53e1",
"assets/packages/animated_icon/assets/checkmark_ok.json": "d43791f67ed2065d8534d30ad3283365",
"assets/packages/animated_icon/assets/circles_menu_2.json": "c433cb02bf56657a42c1bb5963fa607d",
"assets/packages/animated_icon/assets/circles_menu_3.json": "5df3f9c85e0ca9e5bc56b718ece86226",
"assets/packages/animated_icon/assets/clear-symbol.json": "307c246cff2d27c944fb33cf4e24eb28",
"assets/packages/animated_icon/assets/clock.json": "ef46b5eeb36672562513d96f630ccd69",
"assets/packages/animated_icon/assets/cloud.json": "c76e77439df441152e8ab6f7b3bcd12c",
"assets/packages/animated_icon/assets/compass.json": "e29b3f473575de6c02af02da2f28690e",
"assets/packages/animated_icon/assets/confused.json": "30cbf5b57f504158300c82b37d172cf9",
"assets/packages/animated_icon/assets/cool.json": "fed987b806728dfd57109dfa8fa7e4b9",
"assets/packages/animated_icon/assets/cross.json": "4f8186dcb99e125c7cae80c8a6c7d58c",
"assets/packages/animated_icon/assets/crying.json": "57647df4780a9f4af5abc02124eb3dc7",
"assets/packages/animated_icon/assets/day_night_weather.json": "af60779aee2d8d834027bcf5ef2548c5",
"assets/packages/animated_icon/assets/demo.png": "7f9d85174d832fdd9ec3caaf583be682",
"assets/packages/animated_icon/assets/diamond.json": "e983e51ad87489050b061cc4dde04a86",
"assets/packages/animated_icon/assets/discount.json": "8c523e7761603f05583c06a17354b64d",
"assets/packages/animated_icon/assets/document.json": "05b47c11f7dcee983a0e1c24e698fcb2",
"assets/packages/animated_icon/assets/dollar.json": "41a4d363da9e51feade4d774712837b9",
"assets/packages/animated_icon/assets/down-arrow.json": "d1ce2bcb82fe6075a7ed7356da89836f",
"assets/packages/animated_icon/assets/download.json": "5af632f5d17961301b0c4eca42b79d8c",
"assets/packages/animated_icon/assets/drag-left.json": "5bc31de4409a61a7a372da9353cd2a1a",
"assets/packages/animated_icon/assets/drag-right.json": "979c0316830e0f193c4241a9e590cee0",
"assets/packages/animated_icon/assets/edit.json": "139320ad4e8be4aeb5421351744fec46",
"assets/packages/animated_icon/assets/edit_cancel.json": "4ee6ba5b65bf7d2ceb839aa990c7e90e",
"assets/packages/animated_icon/assets/edit_ok.json": "51350be0e5c184d7c524fe38f40902f4",
"assets/packages/animated_icon/assets/expensive.json": "0bb81a1ba4237d2e505c506a319f8bb2",
"assets/packages/animated_icon/assets/eye.json": "bf14651a14e319ac6d2ae8a37168e05f",
"assets/packages/animated_icon/assets/fatal-error.json": "9d82a9938e0eb82288d97f2948948c10",
"assets/packages/animated_icon/assets/favorite_folder.json": "5c5be33497e5752392a757948f81ec5c",
"assets/packages/animated_icon/assets/file.json": "3c5a683c8f0d5847e82447bc91f40d4b",
"assets/packages/animated_icon/assets/fog_weather.json": "75b3d483c81c75eb4bac6fdb79b299ef",
"assets/packages/animated_icon/assets/fullscreen.json": "04fe2e8b50ddf67d14d951414f8667c3",
"assets/packages/animated_icon/assets/gmail.json": "b37689e4d0b1a31ddb7cc6f0b08df20b",
"assets/packages/animated_icon/assets/heart.json": "4fd6bbd2a785c55c3c729217f9981cbc",
"assets/packages/animated_icon/assets/heart_2.json": "ec728a02801a28844116fb7c2b8f70d5",
"assets/packages/animated_icon/assets/home.json": "f7e97ef1b623b8db02a8db2476f37442",
"assets/packages/animated_icon/assets/hourglass.json": "372b56bb7dc3e56090a6494a7fb4d69b",
"assets/packages/animated_icon/assets/info-click.json": "9c4df7c49129c6cafa5c341026d43115",
"assets/packages/animated_icon/assets/internet.json": "de90409fd58251147830605d9896e44c",
"assets/packages/animated_icon/assets/in_love.json": "9d3e528375ee6e063e1a952aa758e67b",
"assets/packages/animated_icon/assets/iphone_spinner.json": "e0d52eb299840750b45a7e80c43e7d55",
"assets/packages/animated_icon/assets/laughing.json": "b6f5507a7f3a6bd4d606a21282615e68",
"assets/packages/animated_icon/assets/left_right.json": "5806bf128cea8c82d106f29a584c1ea0",
"assets/packages/animated_icon/assets/list.json": "fa94a8bf563855b68320e5b76aa5f764",
"assets/packages/animated_icon/assets/live-video-on.json": "638fffb60c94010b7f8d68f550eba331",
"assets/packages/animated_icon/assets/loading_1.json": "75efe45219ef6143429b4b225634449d",
"assets/packages/animated_icon/assets/loading_2.json": "f6e465a44b33233ce28a12ee76045dda",
"assets/packages/animated_icon/assets/loading_3.json": "18e23d18db166f2dff169cc1983f774f",
"assets/packages/animated_icon/assets/loading_4.json": "66268fbf3f4c7dea6a81df21a5a1e46a",
"assets/packages/animated_icon/assets/loading_5.json": "a831cd127c2d019778528f198cfefcc3",
"assets/packages/animated_icon/assets/loading_6.json": "cad4b6ccd0a1e43b9c1ed47133dabb04",
"assets/packages/animated_icon/assets/loading_7.json": "6dd95d36ea9d09924d92f18e14def8ab",
"assets/packages/animated_icon/assets/map.json": "6a4ad8816ccaa5a630279fdef4f06ebe",
"assets/packages/animated_icon/assets/map_pointer.json": "018a74eec55f8959347aefbaf10f9dcb",
"assets/packages/animated_icon/assets/menu.json": "86180df740cc1a224561e130d1b81da2",
"assets/packages/animated_icon/assets/menu_arrow.json": "16081971f09f67a26fc1b3f46b8802b1",
"assets/packages/animated_icon/assets/missed_call.json": "d69450dda953da82afa80f5e14cfcdf2",
"assets/packages/animated_icon/assets/mute.json": "a7cd312791b602731566644cda8f01fd",
"assets/packages/animated_icon/assets/neatral_face.json": "9417a2503732b758f921064ffe09a3f4",
"assets/packages/animated_icon/assets/no_comments.json": "63e9000d6324078c8c9b1848324b3d88",
"assets/packages/animated_icon/assets/numerical_sorting.json": "29ec74211cc6780607b965a97b7ddfa4",
"assets/packages/animated_icon/assets/paid.json": "6bf0ede45aa0082ff8ba2d1c7d1d4df2",
"assets/packages/animated_icon/assets/pause.json": "bd53aeea8b02f227dd372454be07e120",
"assets/packages/animated_icon/assets/play_stop.json": "bed868226187c4132aa075a1277d11b8",
"assets/packages/animated_icon/assets/play_stop_2.json": "1762898e2b28750ae79fc22bf868efc5",
"assets/packages/animated_icon/assets/power-off-button.json": "e0fa101ae10bbed6a3aa85c20c9f47aa",
"assets/packages/animated_icon/assets/print.json": "d54ba53aacc6d8fe2ea22012805d51b2",
"assets/packages/animated_icon/assets/puzzled.json": "365f0e93cef957303301c709fb4e6d63",
"assets/packages/animated_icon/assets/qr-code.json": "66255531a8987c95d9115bbc6b6c4846",
"assets/packages/animated_icon/assets/refresh.json": "0e4661e60e73fb2080d2248f1cfddfb5",
"assets/packages/animated_icon/assets/rotate.json": "0f43b79dc55b93a3d12948ccea68460d",
"assets/packages/animated_icon/assets/save-changes.json": "5813bb5a358888658a51386819169671",
"assets/packages/animated_icon/assets/settings.json": "4b6b3d0922452a469d80f1615fa1f3a0",
"assets/packages/animated_icon/assets/share.json": "bbca283e078a88e5e69608c207166403",
"assets/packages/animated_icon/assets/shocker.json": "6e697424f3c102bc2000c30245ddd14e",
"assets/packages/animated_icon/assets/sign-out.json": "f375d0e8ba61b296e4c0ae9353965773",
"assets/packages/animated_icon/assets/silent.json": "78626c6f16e9300839c518a92a19dd2d",
"assets/packages/animated_icon/assets/skateboarding.json": "36c68e00d9cf64d3f13746ccc3cd2bda",
"assets/packages/animated_icon/assets/skip_backwards.json": "2835cc51b2e2766df5a8bd7a36518312",
"assets/packages/animated_icon/assets/skip_forwards.json": "2af637238aa74085237d8554175a0d3c",
"assets/packages/animated_icon/assets/sleeping.json": "eeab4b61177e0b26feec443cda21e936",
"assets/packages/animated_icon/assets/smile.json": "dc30e2d8ae9ae4117513615780e0b452",
"assets/packages/animated_icon/assets/spinning_arrows.json": "8134b71f41e59b184d48fcd682b7ae43",
"assets/packages/animated_icon/assets/submit_progress.json": "73e31ca174258b4375dd8907bf4e598c",
"assets/packages/animated_icon/assets/thumb_up.json": "ae32094bbaf5a06c2fe785618c8ed4c5",
"assets/packages/animated_icon/assets/toggle.json": "3b2b9be0e4e36fefaa418741f3d0e26c",
"assets/packages/animated_icon/assets/tongue_out.json": "0ad19f80c100e8ebfdd6b3e23ccea745",
"assets/packages/animated_icon/assets/trash_bin.json": "d66d677f84f62f9037f321af36acbfe6",
"assets/packages/animated_icon/assets/tune.json": "4b763ed0cf954405cd7b2d501b63cd99",
"assets/packages/animated_icon/assets/unlock.json": "bda8666eab56bd80fc6af5dbe5702458",
"assets/packages/animated_icon/assets/upload.json": "0bd081997f18f3ec404d5903689b5411",
"assets/packages/animated_icon/assets/volume.json": "caf67509ea1a413e0627e5c6784b05af",
"assets/packages/animated_icon/assets/vomited.json": "1590f196364d415de15209f874366235",
"assets/packages/animated_icon/assets/walk.json": "df4aba413834afcd8af026b1749c6040",
"assets/packages/animated_icon/assets/wifi_search.json": "d37d07bb5deee76c31d7f6c383c6de22",
"assets/packages/animated_icon/assets/wink.json": "05858ea381a0523af1c93b8a045d01c6",
"assets/packages/animated_icon/assets/zoom.json": "5c12ae0d082ada5f1ad1633c556f8c0c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "fdd989f02576ec05830911556d83473a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ac99533bd9dc46227434b4853c3e532",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "093d2cde7075fcffb24ab215668d0da2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e17b1ec3152f29bf783bd42db8b6023",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/perfrse.gif": "5f3dbad505fdcdc249a36d718d1b77d6",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "2a2d9b55abc5274b60a53ec97eb13cf4",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "5fa1a511adaed1bf77085a2d26cd1605",
"icons/Icon-512.png": "69efb1e0f8ea79e27c979e40d8b2aabf",
"icons/Icon-maskable-192.png": "5fa1a511adaed1bf77085a2d26cd1605",
"icons/Icon-maskable-512.png": "50989307ff9201b25dd1d6db6a326d94",
"icons/img.png": "683118fda17d438fd5a9b98abb0cadab",
"icons/logo_perf_rse.png": "5335d1d63c56e530b0a54d2a9074bbc6",
"index.html": "a57f31a8db04df24480be05c5a7b3748",
"/": "a57f31a8db04df24480be05c5a7b3748",
"main.dart.js": "b29ff20dd7f998d34d6daa41692c14ab",
"manifest.json": "cede2f3a0e0f75b763847fb6ec6eed7e",
"version.json": "44c906def3cbbf9c36ba5bd7fc0fb615"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
