jQuery(function($) {
    $(function() {
        $("#textarea").myWysiwyg({
            buttons: [
                "bold", "italic", "barre",  "link", "outdent", "indent",
                "justifyLeft", "justifyRight", "justifyCenter", "justifyFull", "source code", "save", "recover", "video", "image",
                 "color", "font size",
            ],
        });
    });

    $.fn.myWysiwyg = function(
        tableau = {
            value1: "bold",

        }

    ) {
        $('#editor').click(() => { $('button').css('display', "block"), $('select').css('display', "block") })
        $textarea = $("#textarea");
        $title = $("#titre");
        $divEditor = $("#editor");
        $bold = $('<button class="btn-border-small">G</button>');
        $italic = $('<button class ="btn-border-small"> I </button>');
        $barre = $('<button class="btn-border-small">B</button>');
        $color = $("<select></select>");
        $optioncolor = $("<option disabled>- Couleur -</option>" + '<option value="rgb(0,0,0)" selected>noir</option>' + '<option value="rgb(71,178,240)">bleu</option>' + '<option value="rgb(240,85,71)">rouge</option>' + '<option value="rgb(251,182,33)">orange</option>' + '<option value="rgb(243,125,194)">rose</option>' + '<option value="rgb(184,70,199)">violet</option>' + '<option value="rgb(122,20,20)">bordeaux</option>');
        $size = $("<select></select>");
        $fontsize = $("<option disabled>- Taille police -</option>" + '<option value="1">8px</option>' + '<option value="2">10px</option>' + '<option value="3" selected>12px</option>' + '<option value="4">14px</option>' + '<option value="5">16px</option>' + '<option value="6">18px</option>');
        $link = $('<button class="btn-border-small" value="Lien">Lien</button>');
        $poussergauche = $('<button class="btn-border-small"> < </button>');
        $poussedroit = $('<button class="btn-border-small"> > </button>');
        $left = $('<button class="btn-border-long">alligner à gauche</button>');
        $right = $('<button class="btn-border-long">alligner à droite</button>');
        $center = $('<button class="btn-border-long">centrer</button>');
        $justify = $('<button class="btn-border-long">Justifier</button>');
        $save = $('<button class="btn-border-long">Sauvegarder</button>');
        $normal = $('<button class="btn-border-most-long">Affichage normal</button>');
        $soucecode = $('<button class="btn-border-long">Code source</button>');
        $image = $('<button class="btn-border-medium">image</button>');
        $video = $('<button class="btn-border-medium">video</button>');
        $recup = $('<button class="btn-border-long">recover</button>');


        function command(name, arg) {
            if (typeof arg === "undefined") {
                arg = "";
                vide = "";
            }

            document.execCommand(name, false, arg);
        }

        for (var value in tableau) {
            if (jQuery.type(tableau[value]) === "array") {
                for (var i = 0; i < tableau[value].length; i++) {
                    if (tableau[value][i] === "bold") {
                        $textarea.append($bold);
                        $bold.css("font-weight", "bold");
                        $bold.click(function() {
                            command("bold");
                        });
                    }

                    if (tableau[value][i] === "italic") {
                        $textarea.append($italic);
                        $italic.css("font-style", "italic");
                        $italic.click(function() {
                            command("italic");
                        });
                    }

                    if (tableau[value][i] === "barre") {
                        $textarea.append($barre);
                        $barre.css("text-decoration", "line-through");
                        $barre.click(function() {
                            command("strikeThrough");
                        });
                    }

                    if (tableau[value][i] === "color") {

                        $textarea.append($color);
                        $color.append($optioncolor);
                        $color.change(function() {
                            command("foreColor", this.value);
                        });
                    }

                    if (tableau[value][i] === "font size") {

                        $textarea.append($size);
                        $size.append($fontsize);
                        $size.change(function() {
                            command("fontSize", this.value);
                        });
                    }

                    if (tableau[value][i] === "link") {
                        $textarea.append($link);
                        $link.click(function() {
                            link();
                        });
                    }

                    if (tableau[value][i] === "outdent") {
                        $textarea.append($poussergauche);
                        $poussergauche.click(function() {
                            command("outdent");
                        });
                    }

                    if (tableau[value][i] === "indent") {

                        $textarea.append($poussedroit);
                        $poussedroit.click(function() {
                            command("indent");
                        });
                    }

                    if (tableau[value][i] === "justifyLeft") {
                        $textarea.append($left);
                        $left.click(function() {
                            command("justifyLeft");
                        });
                    }

                    if (tableau[value][i] === "justifyRight") {
                        $textarea.append($right);
                        $right.click(function() {
                            command("justifyRight");
                        });
                    }

                    if (tableau[value][i] === "justifyCenter") {
                        $textarea.append($center);
                        $center.click(function() {
                            command("justifyCenter");
                        });
                    }

                    if (tableau[value][i] === "justifyFull") {
                        $textarea.append($justify);
                        $justify.click(function() {
                            command("justifyFull");
                        });
                    }

                    if (tableau[value][i] === "image") {
                        $textarea.append($image);
                        $image.click(function() {
                            image()

                        });
                    }
                    if (tableau[value][i] === "video") {
                        $textarea.append($video);
                        $video.click(function() {
                            video()

                        });
                    }

                    if (tableau[value][i] === "source code") {
                        $textarea.append($soucecode);
                        $textarea.append($normal);
                        $soucecode.click(function() {
                            $soucecode.attr("disabled", "disabled");
                            $normal.removeAttr("disabled", "disabled");
                            $divEditor[0].innerText = $divEditor[0].innerHTML;
                            code = "source code";
                        });
                        $normal.click(function() {
                            $soucecode.removeAttr("disabled", "disabled");
                            $normal.attr("disabled", "disabled");
                            $divEditor[0].innerHTML = $divEditor[0].innerText;
                            code = "normal display";
                        });
                    }
                    if (tableau[value][i] === "save") {

                        $textarea.append($save);
                        $save.click(function() {
                            confirmMessage();
                        });
                    }
                    if (tableau[value][i] === "recover") {

                        $textarea.append($recup);
                        $recup.click(function() {
                            recup();
                        });
                    }
                }
            }
        }

        $textarea.before($title);

        $textarea.append($divEditor);

        $divEditor = $("#editor");

        document.execCommand("defaultParagraphSeparator", false, "p");


        function link() {
            arg = prompt("Quelle est l'adresse du lien ?");

            $lien = localStorage.setItem("lien", arg);

            if ($lien !== null)

                $divEditor[0].innerHTML = ' <a href="' + localStorage.getItem("lien") + '"> votre lien </a>'

        }

        function image() {

            img = prompt("Quel est le lien de l'image ?");

            $image = localStorage.setItem("image", img);

            if ($image !== null)

                $divEditor[0].innerHTML = '<img width="520" height="420" src=" ' + localStorage.getItem("image") + '" /> ';
        }


        function video() {
            vide = prompt("Quel est le lien de la video ?");
            $video = localStorage.setItem("video", vide);
            check = vide.split(' ')
            console.log(check[0]);
            if (check[0] === "<iframe") {
                $divEditor[0].innerHTML = localStorage.getItem("video");
            } else {
                return
            }
        }

        function local() {
            localStorage.setItem("textarea", $divEditor[0].innerHTML);

        }

        function recup() {
            $divEditor[0].innerHTML = localStorage.getItem("textarea");
        }

        function confirmMessage() {
            if (
                confirm(
                    "Voulez-vous sauvegarder ?\n(Si oui sauvegarde toute les 1 min )"
                )
            ) {

                setInterval(local, 6000);
            } else {
                local();
            }
        }
    };
});