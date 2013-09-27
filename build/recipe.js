/*global process:false*/
var mainMenuTree = [
    // { label: 'Home', icon: '', route: 'home'
    //    // sub: [
    //    //     { label: 'Contact us', route: 'contactus', scroll: true}
    //    //     ]
    // }
];

var slides =  [
    // { url: "images/slides/home_page_Early_Childhood_Education_and_Care_training.jpg"
    //   // ,title: 'Early Childhood Education and Care training'
    //   // ,subtitle: 'Aged care slogan'
    // }
];

var exports = {
    verbose: true
    
    ,prettyPrintHtml: false
    // ,tagIdPostfix: '__' //can be overridden per template
    ,paths: {
        root: process.cwd()
        //relative to this root:
        ,partials: 'build/'  //can be overridden per template
        ,out:'www/built' //can be overridden per template with pathout
        ,js: 'www/js'
    }
    ,routes : [
        ['page1', '/built/page1.html', 'page1Cntl'],
        ['page2', '/built/page2.html', 'page2Cntl']
    ]
    
    //Every partial generates a string. How the partial is generated
    //depends on its type. Each type can define more than one partial
    //of that type by assigning an array of definitions instead of
    //just one (object) definition to that type. These partials are
    //identified by their id. This enables them to uses as the source in
    //later defined templates. They don't need an id if you just want
    //to generate a string to save to the file defined in 'out'.
    ,partials: {
        ids: {
            title: '<title>Test Site</title>'
            ,skewer:'<script src="http://localhost:9090/skewer"></script>'
            ,persona:'<script src="https://login.persona.org/include.js"></script>'
            // ,recaptcha: '<script type="text/javascript" src="http://www.google.com/recaptcha/api/js/recaptcha_ajax.js"></script>'
        }
        ,metaBlock : {
            id: 'meta',
            tags: [ { charset:'utf-8' }
                    ,{ content:"IE=edge,chrome=1",
                       "http-equiv":"X-UA-Compatible"
                     }
                    ,{ content:"This is the description of the test site",
                       name:"description"
                     }
                    ,{ name: "viewport"
                       ,content: "width=device-width, initial-scale=1.0"
                    //stops zooming:
                    // ,content: '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">'
                  } 
                  ]
        }
        ,linkBlock:  {
            id: 'myLinkBlock',
            files:  [
                // 'normalize', //included with bootstrap3
                'h5bp',
                '../bootstrap3/css/bootstrap.css'
                ,'persona-buttons'
                // ,'jquery-ui-1.10.2.custom'
                // ,'angular-ui'
                // ,'checkboxes'
                ,'main'
            ]
            ,path: 'css/'
        }
        ,scriptBlock: [
            {
                id: 'headJsBlock',
                files: [
                ],
                path: 'js/'
            },
            {
                id: 'vendorJsBlock',
                files: [
                    'jquery-1.9.1.min.js'
                    ,'noconsole'
                    ,'../bootstrap3/js/bootstrap.js'
                    // ,'jquery-ui-1.10.2.custom.min'
                    ,'angular.min'
                    // ,'angular-ui'
                    // ,'ui-bootstrap-tpls-0.2.0'
                    ,'modernizr' 
                    ,"../ckeditor/ckeditor.js"
                    ,'persona_include' //to be replaced by include.js from CDN
                ],
                path: 'thirdpartyjs/'
            }
            ,{
                id: 'myJsBlock',
                files: [
                    'main.js'
                    ,'router.js'
                    ,'persona'
                ],
                path: 'js/'
            }
        ]
        // ,slideShow: [{ type: 'flex',
        //                id: 'flex',
        //                slides: slides
        //              }
        // ]
        ,menu: [
            // { type: 'superfish',
            //       tree: mainMenuTree,
            //       id: 'superfish'
            //     },
        ]
        ,template: [
            { src: 'views/home.html' 
              ,tagIdPostfix: '--' //can be overridden per template
              ,out: 'home.html'
              ,mapping: {
                  // menu: 'html/docmenu',
                  // doc: 'markdown/doc.md'
              }
            }
            ,{ src: 'views/page1.html' 
              ,tagIdPostfix: '--' //can be overridden per template
              ,out: 'page1.html'
              ,mapping: {
                  // menu: 'html/docmenu',
                  // doc: 'markdown/doc.md'
              }
            }
            ,{ src: 'views/page2.html' 
              ,tagIdPostfix: '--' //can be overridden per template
              ,out: 'page2.html'
              ,mapping: {
                  // menu: 'html/docmenu',
                  // doc: 'markdown/doc.md'
              }
            },
            //Main layout
            {   pathOut: 'www/'
                ,out: 'index.html' //optional, relative to root
                ,src: 'html/basicPage.html'
               ,tagIdPostfix: '' //can be overridden per template
                //Maps tag ids to partial ids. Tag ids have to be
                //postfixed with two dashes in the template. Partials
                //with an extension will be loaded from the partials
                //folder for this template. Markdown files will be
                //converted to html. Partials in an array will be
                //concatenated before inserted at the tag id element
                ,mapping: {
                    head: ['title', 'meta', 'html/ieshim',  'skewer', 'headJsBlock', 'myLinkBlock'
                           // ,'persona'
                           // ,'_linkBlock'
                          ],
                   "ng:app": ['html/body.html', 'vendorJsBlock', 'myJsBlock'
                              // 'recaptcha',
                               // 'html/google_analytics.html'
                             ]
                }
            }
            
        ] 
    }
};
