<!DOCTYPE html>
<html>

<head>

    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title class="blue-text">IT help DESK</title>
    <link rel="icon" href="images/favicon.ico" />

    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection" />
    <link href="css/faweb/css/all.min.css" rel="stylesheet">
    <!--load all styles -->

    <link type="text/css" rel="stylesheet" href="css/local.css" media="screen,projection" />
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<body>

    <div class="row">


        <div class="col xl12 l12 m12 s12">

            <nav class="white nav-extended z-depth-0">
                <div class="nav-wrapper white" style="padding-left: 10px;padding-top: 10px;">

                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons blue-text">menu</i>
                                </a>
                    <img class="brand-logo" src="images/logo-248by69.png">

                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a class="blue-text"><i class="fas fa-envelope-open"></i> something@gmail.com</a></li>
                        <li><a class="blue-text"><i class="fas fa-phone"></i> +25479084376</a></li>
                    </ul>



                </div>
                <div class="nav-content">
                    <ul class="tabs tabs-transparent">

                        <li class="tab"><a class="blue-text tabone" onclick="this.parentElement.style.background-color = 'blue';" onclick="this.parentElement.style.background-color = 'blue'" href="#home">Home</a></li>
                        <li class="tab"><a class="blue-text tabone getsupport" href="#getsupport">Get Help Now</a></li>

                        <li class="tab"><a class="blue-text tabone" href="#supportplans">Support Plans</a></li>

                        <li class="tab"><a class="blue-text tabone" href="#Login">Login</a></li>
                    </ul>

                </div>
            </nav>

            <ul class="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
        </div>

        <!--  Home html and everything will be done here-->
        <div id="home" class="col s12 m12 l12 xl12">


            <div class="row" id="parallax">

                <div class="col s12" style="height: 60vh;">
                    <h3 class="center-align white-text" style="margin-top: 100px;">Search for help on all your IT questions.</h3>
                    <p class="center-align white-text">How can we help you ?</p>

                    <div class="row" style="margin-bottom: 50px;">
                        <form class="col xl8 l8 m8 s8 offset-xl2 offset-l2 ">
                            <div class="row">
                                <div class="input-field col s12 ">

                                    <input id="email" type="text" placeholder="Question" class="validate browser-default search_box">


                                </div>
                            </div>
                        </form>
                    </div>

                </div>


                <div class="col xl12 l12 m12 s12 white" style="height: 450px;">
                    <h4 class="center-align" style="margin-bottom: 50px;">Frequently asked questions <i class="material-icons">chat</i></h4>

                    <div class="row ">

                        <!-- card  house-->
                        <div class="row" style="margin-left: 5%;margin-right: 5%;margin-bottom: 50px;">


                            <!-- Cards for workin fqA-->
                            <div class="col xl3 l3 m3 s12 hoverable z-depth-5 waves-effect waves-block waves-teal card">
                                <div class="row " style="margin-bottom: 0%;">
                                    <div class="card-image col xl4 l4 m4 s4 blue">

                                        <i class="fas fa-cogs fa-4x" style="margin-top: 5px;margin-bottom: 5px;"></i>
                                    </div>
                                    <div class="card-content col xl8 l8 m8 s8">
                                        <p class=""><a href=""> Remote Working ?</a></p>
                                    </div>


                                </div>
                            </div>
                            <div class="col xl3 l3 m3 s12 offset-xl1 offset-l1 hoverable z-depth-5 waves-effect waves-block waves-teal card">
                                <div class="row " style="margin-bottom: 0%;">
                                    <div class="card-image col xl4 l4 m4 s4 blue">

                                        <i class="fas fa-tv fa-4x" style="margin-top: 5px;margin-bottom: 5px;"></i>
                                    </div>
                                    <div class="card-content col xl8 l8 m8 s8">
                                        <p class="">Office Set up</p>
                                    </div>


                                </div>
                            </div>
                            <div class="col xl3 l3 m3 s12 offset-xl1 offset-l1 hoverable z-depth-5 waves-effect waves-block waves-teal card">
                                <div class="row " style="margin-bottom: 0%;">
                                    <div class="card-image col xl4 l4 m4 s4 blue">

                                        <i class="fas fa-rss fa-4x" style="margin-top: 5px;margin-bottom: 5px;"></i>
                                    </div>
                                    <div class="card-content col xl8 l8 m8 s8">
                                        <p class="">Internet Option</p>
                                    </div>


                                </div>
                            </div>
                            <!-- Cards for workin fqA-->
                        </div>

                        <!-- card house-->

                        <!-- card  house-->
                        <div class="" style="margin-left: 5%;margin-right: 5%;">


                            <!-- Cards for workin fqA-->
                            <div class="col xl3 l3 m3 s12 hoverable z-depth-5 waves-effect waves-block waves-teal  card">
                                <div class="row " style="margin-bottom: 0%;">
                                    <div class="card-image col xl4 l4 m4 s4 blue ">
                                        <i class="fas fa-users fa-4x" style="margin-top: 5px;margin-bottom: 5px;"></i> </div>
                                    <div class="card-content col xl8 l8 m8 s8">
                                        <p class="">Zoom Set up</p>
                                    </div>


                                </div>
                            </div>
                            <div class="col xl3 l3 m3 s12 offset-xl1 offset-l1 hoverable z-depth-5 waves-effect waves-block waves-teal card">
                                <div class="row" style="margin-bottom: 0%;">
                                    <div class="card-image col xl4 l4 m4 s4 blue ">

                                        <i class="fas fa-envelope fa-4x" style="margin-top: 5px;margin-bottom: 5px;"></i> </div>
                                    <div class="card-content col xl8 l8 m8 s8">
                                        <p class="">Suspicious Emails</p>
                                    </div>


                                </div>
                            </div>
                            <div class="col xl3 l3 m3 s12 offset-xl1 offset-l1 hoverable z-depth-5 waves-effect waves-block waves-teal card">
                                <div class="row " style="margin-bottom: 0%;">
                                    <div class="card-image col xl4 l4 m4 s4 blue">

                                        <i class="fab fa-windows fa-4x" style="margin-top: 5px;margin-bottom: 5px;"></i>
                                    </div>
                                    <div class="card-content col xl8 l8 m8 s8">
                                        <p class="">Window activation</p>
                                    </div>


                                </div>
                            </div>
                            <!-- Cards for workin fqA-->
                        </div>

                        <!-- card house-->


                    </div>

                </div>


                <div class="col xl7 l7 m7 white" style="height: 400px;">
                    <h4 class="center"> Who Are We</h4>
                    <p class="center">Our approach to business enables us to design innovative solutions with a commitment to results and customer satisfaction. We are Technology experts backed with vast experience and more than 15 years’ experience in managing IT projects.
                        Our expertise draw on our core values of simplicity, creativity, independence, respect and openness to transform the latest technology into added-value services, enabling our customers realize real business value of their IT investment
                        that includes achieving and maintaining competitive advantage, strengthening their market and revenue position and deliver support in solving business needs and challenges</p>
                </div>
                <div class="col xl5 l5 m5 s12 white" style="height: 400px;margin-bottom: 50px;">

                    <div class="row ">
                        <form class="col s12">
                            <h4 class="center-align">Join Us</h4>
                            <div class="row">
                                <div class="input-field col s12">
                                    <i class="fas fa-envelope prefix"></i>
                                    <input id="icon_prefix" type="email" class="validate">
                                    <label for="icon_prefix">email</label>
                                </div>
                                <div class="input-field col s12">
                                    <i class="fas fa-unlock-alt prefix"></i>
                                    <input id="icon_telephone" type="password" class="validate">
                                    <label for="icon_telephone">password</label>
                                </div>
                            </div>
                            <div class="col s12 btn">Login</div>
                        </form>
                    </div>



                </div>
                <div class="col s12" style="margin-bottom: 100px;">
                    <h3 class="center-align">Guides and Tutorials</h3>
                    <video class="responsive-video" style="width: 75%;margin-left:12%; margin-bottom: 50px;" controls>
                        <source src="images/Close Up Video Of Green Leaves.mp4" type="video/mp4">
                      </video>



                    <!-- card  house docs-->
                    <div class="row" style="margin-bottom: 50px;padding-left: 7%;">


                        <!-- Cards for workin fqA-->
                        <div class="col xl3 l3 m3 s12 hoverable z-depth-5 waves-effect waves-block waves-teal card horizontal">


                            <div class="card-image"><i class="fas fa-file-pdf red-text darken-4 fa-2x"></i> </div>
                            <div class="card-stacked">
                                <div class="card-content">
                                    <p><a href="">How to install zoom docs</a></p>
                                </div>
                            </div>



                        </div>
                        <div class="col xl3 l3 m3 s12 offset-xl1 offset-l1 hoverable z-depth-5 waves-effect waves-block waves-teal card horizontal">


                            <div class="card-image"><i class="fas fa-file-pdf red-text darken-4 fa-2x"></i> </div>
                            <div class="card-stacked">
                                <div class="card-content">
                                    <p><a href="">How to activate windows docs</a></p>
                                </div>
                            </div>


                        </div>
                        <div class="col xl3 l3 m3 s12 offset-xl1 offset-l1 hoverable z-depth-5 waves-effect waves-block waves-teal card horizontal">


                            <div class="card-image"><i class="fas fa-file-pdf red-text darken-4 fa-2x"></i> </div>
                            <div class="card-stacked">
                                <div class="card-content">
                                    <p><a href="">Excel docs</a></p>
                                </div>
                            </div>

                        </div>
                        <!-- Cards for workin fqA-->
                    </div>

                    <!-- card house docs-->



                    <!-- card  house docs-->
                    <div class="row" style="margin-bottom: 50px;padding-left: 7%;">


                        <!-- Cards for workin fqA-->
                        <div class="col xl3 l3 m3 s12 hoverable z-depth-5 waves-effect waves-block waves-teal card horizontal">


                            <div class="card-image"><i class="fas fa-file-pdf red-text darken-4 fa-2x"></i> </div>
                            <div class="card-stacked">
                                <div class="card-content">
                                    <p><a href="">How to install zoom docs</a></p>
                                </div>
                            </div>



                        </div>
                        <div class="col xl3 l3 m3 s12 offset-xl1 offset-l1 hoverable z-depth-5 waves-effect waves-block waves-teal card horizontal">


                            <div class="card-image"><i class="fas fa-file-pdf red-text darken-4 fa-2x"></i> </div>
                            <div class="card-stacked">
                                <div class="card-content">
                                    <p><a href="">How to activate windows docs</a></p>
                                </div>
                            </div>


                        </div>
                        <div class="col xl3 l3 m3 s12 offset-xl1 offset-l1 hoverable z-depth-5 waves-effect waves-block waves-teal card horizontal">


                            <div class="card-image"><i class="fas fa-file-pdf red-text darken-4 fa-2x"></i> </div>
                            <div class="card-stacked">
                                <div class="card-content">
                                    <p><a href="">Excel docs</a></p>
                                </div>
                            </div>

                        </div>
                        <!-- Cards for workin fqA-->
                    </div>

                    <p class="center-align"><a class="btn">For more tutorials videos and documents</a></p>

                    <!-- card house docs-->


                </div>




            </div>


        </div>
        <!--  End of home-->



        <!--  Get Support html and everything will be done here-->
        <div id="getsupport" class="col s12 carousel carousel-slider center red" style="height: 80vh;">
            <div class="carousel-fixed-item center">
                <a class="btn waves-effect white grey-text darken-text-2">Create a ticket</a>
            </div>
            <div class="carousel-item red white-text" href="#one!">
                <h2>Need personal Help ?</h2>
                <p class="white-text">.......</p>
            </div>
            <div class="carousel-item amber white-text" href="#two!">
                <h2>Second Panel</h2>
                <p class="white-text">This is your second panel</p>
            </div>
            <div class="carousel-item green white-text" href="#three!">
                <h2>Third Panel</h2>
                <p class="white-text">This is your third panel</p>
            </div>
            <div class="carousel-item blue white-text" href="#four!">
                <h2>Fourth Panel</h2>
                <p class="white-text">This is your fourth panel</p>
            </div>
        </div>
        <!--  End of support-->






        <!-- Glenn's space Support plans html and everything will be done here-->
        <div id="supportplans" class="col s12 m12 l12 xl12" style="background-image: linear-gradient(blue,white);">

            <!-- This is the enitre row-->
            <div class="row">


                <div class="white col xl12 l12 m12 s12" style="padding-top: 24px;">

                    <h4 class="center-align " style="margin-top: 50px;">Pricing and Plans</h4>

                    <div class="row">



                        <div class="card no-padding" style="width: 25%;display: inline-block;margin-left: 12%;">

                            <img class="card-image " style="width: 100%;" src="images/low-angle-photo-of-four-high-rise-curtain-wall-buildings-830891.jpg">

                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Enterprise<i class="material-icons right">more_vert</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                            <div class="card-action">
                                <a href="#">Purchase</a>
                                <a class="right-align" href="#">90 days trial</a>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>

                        </div>


                        <div class="card no-padding" style="width:25%;display: inline-block;">

                            <img class="card-image " style="width: 100%;" src="images/people-sitting-beside-brown-wooden-desk-near-flat-screen-tv-1181355.jpg">

                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Business<i class="material-icons right">more_vert</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                            <div class="card-action">
                                <a href="#">Purchase</a>
                                <a class="right-align" href="#">60 days trial</a>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>

                        </div>

                        <div class="card no-padding" style="width:25%;display: inline-block;">

                            <img class="card-image " style="width: 100%;" src="images/woman-in-black-blazer-sitting-on-black-office-chair-3727464.jpg">

                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Individual<i class="material-icons right">more_vert</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                            <div class="card-action">
                                <a href="#">Purchase</a>
                                <a class="right-align" href="#">30 days trial</a>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>

                        </div>


                    </div>

                </div>


                <div class="col xl12 l12 m12 s12 white">
                    <h4 class="center-align " style="margin-top: 50px;">What We do </h4>
                    <p style="margin-top: 30px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper nisl sit amet lorem tempus faucibus. Phasellus nec consequat urna, eget aliquam eros. Curabitur vehicula risus eget maximus auctor. Donec sit amet urna molestie,
                        blandit massa ac, sagittis augue. Fusce vel iaculis dolor, vel pretium purus. Phasellus quis tellus malesuada, scelerisque sapien vel, laoreet nisi. Curabitur consectetur facilisis lacinia. Nulla vel congue ipsum. Maecenas nec
                        fermentum dolor. Aenean vitae tempus arcu. Nunc sed condimentum dolor. Nunc non purus massa. In imperdiet sodales odio. Fusce vehicula sit amet dui ut luctus. Nullam placerat volutpat felis ac hendrerit. In consequat diam non ipsum
                        viverra hendrerit. Donec sed lacinia eros. Integer vitae nisl vel ipsum vulputate sagittis. Cras porta eu magna ac posuere. Donec placerat odio ac finibus rhoncus. Curabitur lacinia, turpis porta feugiat pharetra, velit ex molestie
                        eros, at vestibulum nisl elit sit amet purus. Maecenas quis mauris venenatis, elementum mauris eget, porttitor nunc. Phasellus suscipit laoreet felis sed pharetra. Curabitur eu faucibus mi. Vivamus dictum sagittis aliquet. Praesent
                        vel consectetur mi. Quisque varius convallis aliquet. In id risus non risus consequat elementum id sit amet nisi. Sed iaculis elit nisi, sed vestibulum odio dignissim sed. Fusce vitae aliquam eros. Aenean porttitor sem vitae dolor
                        blandit lacinia. Quisque rutrum diam eget ligula vehicula a</p>
                </div>



                <div class="white col xl12 l12 m12 s12">


                    <h4 class="center-align " style="margin-top: 50px;">How it works</h4>



                    <video class="responsive-video" style="width: 75%;margin-left:12%;" controls>
                            <source src="images/Close Up Video Of Green Leaves.mp4" type="video/mp4">
                          </video>


                </div>

                <div class="white col xl12 l12 m12 s12">

                    <h4 class="center-align " style="margin-top: 50px;">Some of our clients</h4>

                    <div class="container blue">

                        <div class="card col xl4 l4 m4 s12 ">
                            <img class="card-image" src="images/logo-248by69.png" />
                        </div>

                        <div class="card col xl4 l4 m4 s12">
                            <img class="card-image" src="images/logo-248by69.png" />
                        </div>

                        <div class="card col xl4 l4 m4 s12">
                            <img class="card-image" src="images/logo-248by69.png" />
                        </div>

                        <div class="card col xl4 l4 m4 s12 ">
                            <img class="card-image" src="images/logo-248by69.png" />
                        </div>

                        <div class="card col xl4 l4 m4 s12">
                            <img class="card-image" src="images/logo-248by69.png" />
                        </div>

                        <div class="card col xl4 l4 m4 s12">
                            <img class="card-image" src="images/logo-248by69.png" />
                        </div>


                        <div class="card col xl4 l4 m4 s12 ">
                            <img class="card-image" src="images/logo-248by69.png" />
                        </div>

                        <div class="card col xl4 l4 m4 s12">
                            <img class="card-image" src="images/logo-248by69.png" />
                        </div>

                        <div class="card col xl4 l4 m4 s12">
                            <img class="card-image" src="images/logo-248by69.png" />
                        </div>

                    </div>


                </div>




            </div>

            <!-- This is the enitre row-->
        </div>
        <!-- Glenn's space End of support plans-->


        <!--  Login html and everything will be done here-->
        <div id="Login" class="col s12 m12 l12 xl12">
        </div>

        <!--  End of contact information-->




    </div>





    <script type="text/javascript " src="js/jquery.js "></script>
    <script type="text/javascript " src="js/materialize.min.js "></script>
    <script type="text/javascript " src="js/init.js "></script>
    <script type="text/javascript " src="js/local.js "></script>
</body>

</html>