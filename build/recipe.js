/*global */
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
        ,js: 'js'
    }
    // ,routes : [
    //     ['guide', '/built/guideView.html'],
    //     ['template', '/built/guideTemplate.html', 'templateCntl']
    // ]
    
    //Every partial generates a string. How the partial is generated
    //depends on its type. Each type can define more than one partial
    //of that type by assigning an array of definitions instead of
    //just one (object) definition to that type. These partials are
    //identified by their id. This enables them to uses as the source in
    //later defined templates. They don't need an id if you just want
    //to generate a string to save to the file defined in 'out'.
    ,partials: {
        ids: {
            title: '<title>Scaffold</title>'
            ,skewer:'<script src="http://localhost:9090/skewer"></script>'
            ,hello_world: '<h2>Hello world. Build on this scaffold!!!</h2>'
        }
        ,metaBlock : {
            id: 'meta',
            tags: [ { charset:'utf-8' },
                    { name: "viewport"
                      ,content: "width=device-width, initial-scale=1, maximum-scale=1"
                    } ]
        }
        ,linkBlock:  {
            id: 'myLinkBlock',
            files:  [
                'bootstrap'
                ,'bootstrap-responsive'
                ,'jquery-ui-1.10.2.custom'
                ,'angular-ui'
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
                    // ,'jquery-ui-1.10.2.custom.min'
                    ,'bootstrap'
                    ,'angular.min'
                    ,'angular-ui'
                    ,'ui-bootstrap-tpls-0.2.0'
                    ,'modernizr'
                    // ,'router'
                    
                ],
                path: 'thirdpartyjs/'
            }
            ,{
                id: 'myJsBlock',
                files: [
                    'angular'
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
            // { src: 'views/guide.html' 
            //   ,tagIdPostfix: '--' //can be overridden per template
            //   ,out: 'guideView.html'
            //   ,mapping: {
            //       menu: 'html/docmenu',
            //       doc: 'markdown/doc.md'
            //   }
            // }
            // ,{ src: 'views/template.html' 
            //   ,tagIdPostfix: '--' //can be overridden per template
            //   ,out: 'guideTemplate.html'
            //   ,mapping: {
            //       // menu: 'html/docmenu',
            //       // doc: 'markdown/doc.md'
            //   }
            // },
            //Main layout
            {   pathOut: 'www/'
                ,out: 'index.html' //optional, relative to root
                ,src: 'html/basicPage.html'
                //Maps tag ids to partial ids. Tag ids have to be
                //postfixed with two dashes in the template. Partials
                //with an extension will be loaded from the partials
                //folder for this template. Markdown files will be
                //converted to html. Partials in an array will be
                //concatenated before inserted at the tag id element
                ,mapping: {
                    head: ['title', 'meta', 'html/ieshim',  'skewer', 'headJsBlock', 'myLinkBlock'
                           // ,'_linkBlock'
                          ],
                    wrapper: [
                        'hello_world'
                        // ,'html/body'
                        ,'vendorJsBlock'
                        ,'myJsBlock'
                    ]
                }
            }
            
        ] 
    }
};
