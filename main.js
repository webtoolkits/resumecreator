//Text Format
function textFormat() {
    var x = document.getElementById("frm");
    var str = "";
    var i = 0;
    for (i = 0; i < x.length; i++) {
        str += x.elements[i].value;
        str += "<br>";
    }

    //Removes "_" from both sides of str
    str = str.trim();

    //Turn string to array
    var arr = str.split("");

    //Get str length
    var length = 0;
    while (arr[i] != undefined) {
        length++;
        i++;
    }

    //-------------- CORE FUNCTION --------------

    //Turn "__" to "_"
    for (i = 0; i < length; i++) {
        if (arr[i] == " " && arr[i + 1] == " ") {
            while (arr[i + 1] == " ") {
                var u;
                for (u = i; u < length - 1; u++) {
                    arr[u] = arr[u + 1];
                }
                length--;
            }
        }
    }

    //Turn "a_._" to "a._"
    for (i = 0; i < length; i++) {
        if (arr[i] == " " && (arr[i + 1] == "." || arr[i + 1] == "," || arr[i + 1] == ";" || arr[i + 1] == "!" || arr[i + 1] == "?" || arr[i + 1] == ")" || arr[i + 1] == "]" || arr[i + 1] == "}")) {
            var u;
            for (u = i; u < length - 1; u++) {
                arr[u] = arr[u + 1];
            }
            length--;
        }
    }

    //Turn ".A" to "._A"
    for (i = 0; i < length; i++) {
        if ((arr[i] == "." || arr[i] == "," || arr[i] == ";" || arr[i] == "!" || arr[i] == "?" || arr[i] == ")" || arr[i] == "]" || arr[i] == "}") && arr[i + 1] != " ") {
            var u;
            for (u = length; u >= i + 2; u--) {
                arr[u] = arr[u - 1];
            }
            arr[i + 1] = " ";
            length++;
        }
    }

    //Turn "a(" to "a_("
    for (i = 0; i < length; i++) {
        if ((arr[i] == "(" || arr[i] == "{" || arr[i] == "[") && arr[i - 1] != " ") {
            var u;
            for (u = length; u >= i + 1; u--) {
                arr[u] = arr[u - 1];
            }
            arr[i] = " ";
            length++;
        }
    }
    //Turn "(_A" to "(A"
    for (i = 0; i < length; i++) {
        if ((arr[i] == "(" || arr[i] == "{" || arr[i] == "[") && arr[i + 1] == " ") {
            var u;
            for (u = i + 1; u < length - 1; u++) {
                arr[u] = arr[u + 1];
            }
            length--;
        }
    }

    //Capitalize: Turn "._a" to "._A"
    for (i = 0; i < length; i++) {
        str = "";
        for (u = 0; u < length; u++) {
            str += arr[u];
        }
        //Dont "," or ";"
        if ((arr[i] == "." || arr[i] == "!" || arr[i] == "?") && arr[i + 1] == " ") {
            arr[i + 2] = str.charAt(i + 2).toUpperCase();
        }
    }

    //Final step: Turn array into string again
    str = "";
    for (i = 0; i < length; i++) {
        str += arr[i];
    }
    document.getElementById("demo").innerHTML = str;
}

//getFormInput
function getFormInput() {
    //Initiate
    var x = document.getElementById("frm");
    var shiftIndex = 0;
    var doc = new jsPDF();

    //--------------------------------------- User Data --------------------------------------

    var name = "Bui Quang Bao";
    var head1 = "App & Web Developer, UI/UX Designer";
    var head2 = "Ho Chi Minh City, Vietnam";

    var cont1 = "(+84)849283959";
    var cont2 = "quangbao.co@gmail.com";
    var cont3 = "linkedin.com/in/buiquangbao";
    var cont4 = "buiquangbao.github.io";

    var skl1_1 = "Web Development";
    var skl1_2 = "HTML, CSS, Javascript, Bootstrap";
    var skl2_1 = "App Development";
    var skl2_2 = "Dartlang, Flutter SDK, Firebase";
    var skl3_1 = "Graphic Design";
    var skl3_2 = "Adobe Illustrator, Davinci Resolve";

    var exp1_1 = "Freelance";
    var exp1_2 = "(Working for clients)";
    var exp1_3 = "Jul 2020 - Present";
    var exp1_4 = "Front-end Web Developer";
    var exp1_5 = "098776656747923847923847923847293832147615427164572364572816347162345781263458172634625348127634";
    var exp2_1 = "Freelance";
    var exp2_2 = "(Working for clients)";
    var exp2_3 = "Jul 2020 - Present";
    var exp2_4 = "Front-end Web Developer";
    var exp2_5 = "232147615427164572364572816347162345781263458172634625348127634512786345127364512346534248273482374982374928347298347293847239482398479322";
    var exp3_1 = "Freelance";
    var exp3_2 = "(Working for clients)";
    var exp3_3 = "Jul 2020 - Present";
    var exp3_4 = "Front-end Web Developer";
    var exp3_5 = "232147615427164572364572816347162345781263458172634625348127634";

    var edu1_1 = "Information Technology, Bachelor's Degree";
    var edu1_2 = "Vietnam National University - University of Science";
    var edu1_3 = "2019 - 2023";
    var edu1_4 = "999932847293847923847923847923847923847923847293832147615427164572364572816347162345781263458172634625348127634";
    var edu2_1 = "Information Technology, Bachelor's Degree";
    var edu2_2 = "Vietnam National University - University of Science";
    var edu2_3 = "2019 - 2023";
    var edu2_4 = "932847293847923847923847923847923847923847293832147615427164572364572816347162345781263458172634625348127634";
    var edu3_1 = "Information Technology, Bachelor's Degree";
    var edu3_2 = "Vietnam National University - University of Science";
    var edu3_3 = "2019 - 2023";
    var edu3_4 = "932847293847923847923847923847923847923847293832147615427164572364572816347162345781263458172634625348127634";

    var awa1_1 = "IT Talent 2019";
    var awa1_2 = "Competition";
    var awa1_3 = "Sep 2019";
    var awa1_4 = "Role: Team Leader";
    var awa1_5 = "Consolation Prize";
    var awa1_6 = "323932847293847923847923847923847923847923847293832147615427164572364572816347162345781263458172634625348127634";
    var awa2_1 = "IT Talent 2019";
    var awa2_2 = "Competition";
    var awa2_3 = "Sep 2019";
    var awa2_4 = "Role: Team Leader";
    var awa2_5 = "Consolation Prize";
    var awa2_6 = "932847293847923847923847923847923847923847293832147615427164572364572816347162345781263458172634625348127634";
    var awa3_1 = "IT Talent 2019";
    var awa3_2 = "Competition";
    var awa3_3 = "Sep 2019";
    var awa3_4 = "Role: Team Leader";
    var awa3_5 = "Consolation Prize";
    var awa3_6 = "932847293847923847923847923847923847923847293832147615427164572364572816347162345781263458172634625348127634";

    var add_title = "ADDITIONAL";
    var add1_1 = "Information Technology, Bachelor's Degree";
    var add1_2 = "2019 - 2023";
    var add1_3 = "932847293847923847923847923847923847923847293832147615427164572364572816347162345781263458172634625348127634";
    var add2_1 = "Information Technology, Bachelor's Degree";
    var add2_2 = "2019 - 2023";
    var add2_3 = "932847293847923847923847923847923847923847293832147615427164572364572816347162345781263458172634625348127634";
    var add3_1 = "Information Technology, Bachelor's Degree";
    var add3_2 = "2019 - 2023";
    var add3_3 = "932847293847923847923847923847923847923847293832147615427164572364572816347162345781263458172634625348127634";
    //
    name = x.elements[shiftIndex + 0].value;
    head1 = x.elements[shiftIndex + 1].value;
    head2 = x.elements[shiftIndex + 2].value;

    cont1 = x.elements[shiftIndex + 3].value;
    cont2 = x.elements[shiftIndex + 4].value;
    cont3 = x.elements[shiftIndex + 5].value;
    cont4 = x.elements[shiftIndex + 6].value;

    skl1_1 = x.elements[shiftIndex + 7].value;
    skl1_2 = x.elements[shiftIndex + 8].value;
    skl2_1 = x.elements[shiftIndex + 9].value;
    skl2_2 = x.elements[shiftIndex + 10].value;
    skl3_1 = x.elements[shiftIndex + 11].value;
    skl3_2 = x.elements[shiftIndex + 12].value;

    exp1_1 = x.elements[shiftIndex + 13].value;
    exp1_2 = x.elements[shiftIndex + 14].value;
    exp1_3 = x.elements[shiftIndex + 15].value;
    exp1_4 = x.elements[shiftIndex + 16].value;
    exp1_5 = x.elements[shiftIndex + 17].value;
    exp2_1 = x.elements[shiftIndex + 18].value;
    exp2_2 = x.elements[shiftIndex + 19].value;;
    exp2_3 = x.elements[shiftIndex + 20].value;
    exp2_4 = x.elements[shiftIndex + 21].value;
    exp2_5 = x.elements[shiftIndex + 22].value;
    exp3_1 = x.elements[shiftIndex + 23].value;
    exp3_2 = x.elements[shiftIndex + 24].value;
    exp3_3 = x.elements[shiftIndex + 25].value;
    exp3_4 = x.elements[shiftIndex + 26].value;
    exp3_5 = x.elements[shiftIndex + 27].value;

    edu1_1 = x.elements[shiftIndex + 28].value;
    edu1_2 = x.elements[shiftIndex + 30].value;
    edu1_3 = x.elements[shiftIndex + 29].value;
    edu1_4 = x.elements[shiftIndex + 31].value;
    edu2_1 = x.elements[shiftIndex + 32].value;
    edu2_2 = x.elements[shiftIndex + 34].value;
    edu2_3 = x.elements[shiftIndex + 33].value;
    edu2_4 = x.elements[shiftIndex + 35].value;
    edu3_1 = x.elements[shiftIndex + 36].value;
    edu3_2 = x.elements[shiftIndex + 38].value;
    edu3_3 = x.elements[shiftIndex + 37].value;
    edu3_4 = x.elements[shiftIndex + 39].value;

    awa1_1 = x.elements[shiftIndex + 40].value;
    awa1_2 = x.elements[shiftIndex + 41].value;
    awa1_3 = x.elements[shiftIndex + 42].value;
    awa1_4 = x.elements[shiftIndex + 43].value;
    awa1_5 = x.elements[shiftIndex + 44].value;
    awa1_6 = x.elements[shiftIndex + 45].value;
    awa2_1 = x.elements[shiftIndex + 46].value;
    awa2_2 = x.elements[shiftIndex + 47].value;
    awa2_3 = x.elements[shiftIndex + 48].value;
    awa2_4 = x.elements[shiftIndex + 49].value;
    awa2_5 = x.elements[shiftIndex + 50].value;
    awa2_6 = x.elements[shiftIndex + 51].value;
    awa3_1 = x.elements[shiftIndex + 52].value;
    awa3_2 = x.elements[shiftIndex + 53].value;
    awa3_3 = x.elements[shiftIndex + 54].value;
    awa3_4 = x.elements[shiftIndex + 55].value;
    awa3_5 = x.elements[shiftIndex + 56].value;
    awa3_6 = x.elements[shiftIndex + 57].value;

    add_title = x.elements[shiftIndex + 58].value;
    add1_1 = x.elements[shiftIndex + 59].value;
    add1_2 = x.elements[shiftIndex + 60].value;
    add1_3 = x.elements[shiftIndex + 61].value;
    add2_1 = x.elements[shiftIndex + 62].value;
    add2_2 = x.elements[shiftIndex + 63].value;
    add2_3 = x.elements[shiftIndex + 64].value;
    add3_1 = x.elements[shiftIndex + 65].value;
    add3_2 = x.elements[shiftIndex + 66].value;
    add3_3 = x.elements[shiftIndex + 67].value;

    //--------------------------------------- Processing --------------------------------------

    //Temp value
    var numOfExp = parseInt(x.elements[shiftIndex + 68].value);
    var numOfEdu = parseInt(x.elements[shiftIndex + 69].value);
    var numOfAwa = parseInt(x.elements[shiftIndex + 70].value);
    var numOfAdd = parseInt(x.elements[shiftIndex + 71].value);

    // //Temp value
    // var numOfExp = 3;
    // var numOfEdu = 1;
    // var numOfAwa = 1;
    // var numOfAdd = 1;

    //Color Theme  
    var rgb_r = 0;
    var rgb_g = 25;
    var rgb_b = 35;
    //Line
    doc.setLineWidth(0.5);
    doc.setDrawColor(200, 200, 200);
    var yTransLine = 6;
    //Basic Elements
    doc.setLineHeightFactor(1.5);
    var leading = 6;
    var yTransTitle = 2;
    var alignment = "justify";
    //Padding & MaxWidth
    var leftSide = 8;
    var maxWidthSide = 51;
    var leftMain = 67;
    var leftMain2 = 107;
    var maxWidthMain = 130;
    var maxWidthMain1 = 36;
    var maxWidthMain2 = 92;
    //Length
    var charInLine1 = 43;
    var charInLine2 = 70;
    var extra_length = 0;
    var exp1_length = Math.ceil(exp1_5.length / charInLine2) + 4; //2,4,2,3 means the height from title to content
    var exp2_length = Math.ceil(exp2_5.length / charInLine2) + 4;
    var exp3_length = Math.ceil(exp3_5.length / charInLine2) + 4;
    var edu1_length = Math.ceil(edu1_4.length / charInLine2) + 4;
    var edu2_length = Math.ceil(edu2_4.length / charInLine2) + 4;
    var edu3_length = Math.ceil(edu3_4.length / charInLine2) + 4;
    var awa1_length = Math.ceil(awa1_6.length / charInLine2) + 4;
    var awa2_length = Math.ceil(awa2_6.length / charInLine2) + 4;
    var awa3_length = Math.ceil(awa3_6.length / charInLine2) + 4;
    var add1_length = Math.ceil(add1_3.length / charInLine2) + 3;
    var add2_length = Math.ceil(add2_3.length / charInLine2) + 3;
    var add3_length = Math.ceil(add3_3.length / charInLine2) + 3;
    //Shift
    var shiftContact = 20;
    var shiftSkill = 110;
    var shiftHeader = 20;

    //shiftExperience 
    var shiftExperience = 45;
    if (numOfExp == 0) {
        shiftExperience -= 2 * leading;
    }
    var shiftExp1 = extra_length + 2 * leading;
    if (numOfExp >= 1) {
        extra_length += exp1_length * leading;
    }
    var shiftExp2 = extra_length + 2 * leading;
    if (numOfExp >= 2) {
        extra_length += exp2_length * leading;
    }
    var shiftExp3 = extra_length + 2 * leading;
    if (numOfExp >= 3) {
        extra_length += exp3_length * leading;
    }
    //shiftEducation
    var shiftEducation = shiftExperience + extra_length + 2 * leading;
    extra_length = 0;
    if (numOfEdu == 0) {
        shiftEducation -= 2 * leading;
    }
    var shiftEdu1 = extra_length + 2 * leading;
    if (numOfEdu >= 1) {
        extra_length += edu1_length * leading;
    }
    var shiftEdu2 = extra_length + 2 * leading;
    if (numOfEdu >= 2) {
        extra_length += edu2_length * leading;
    }
    var shiftEdu3 = extra_length + 2 * leading;
    if (numOfEdu >= 3) {
        extra_length += edu3_length * leading;
    }
    //shiftAward
    var shiftAward = shiftEducation + extra_length + 2 * leading;
    extra_length = 0;
    if (numOfAwa == 0) {
        shiftAward -= 2 * leading;
    }
    var shiftAwa1 = extra_length + 2 * leading;
    if (numOfAwa >= 1) {
        extra_length += awa1_length * leading;
    }
    var shiftAwa2 = extra_length + 2 * leading;
    if (numOfAwa >= 2) {
        extra_length += awa2_length * leading;
    }
    var shiftAwa3 = extra_length + 2 * leading;
    if (numOfAwa >= 3) {
        extra_length += awa3_length * leading;
    }
    //shiftAdditional
    var shiftAdditional = shiftAward + extra_length + 2 * leading;
    extra_length = 0;
    if (numOfAdd == 0) {
        shiftAdditional -= 2 * leading;
    }
    var shiftAdd1 = extra_length + 2 * leading;
    if (numOfAdd >= 1) {
        extra_length += add1_length * leading;
    }
    var shiftAdd2 = extra_length + 2 * leading;
    if (numOfAdd >= 2) {
        extra_length += add2_length * leading;
    }
    var shiftAdd3 = extra_length + 2 * leading;
    if (numOfAdd >= 3) {
        extra_length += add3_length * leading;
    }

    //Side
    doc.setFillColor(rgb_r, rgb_g, rgb_b);
    doc.rect(0, 0, 60, 300, "F");

    //Header
    if (true) {
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(24);
        doc.setFontStyle("bold");
        doc.text(name, leftMain, shiftHeader);
        doc.setFontStyle("normal");
        doc.setFontSize(12);
        doc.text(head1, leftMain, shiftHeader + 1 * leading);
        doc.text(head2, leftMain, shiftHeader + 2 * leading);
    }

    //Contact
    if (true) {
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(16);
        doc.setFontStyle("bold");
        doc.text("CONTACT", leftSide, shiftContact);
        doc.setFontStyle("normal");
        doc.setFontSize(12);
        doc.text("Phone", leftSide, shiftContact + 2 * leading);
        doc.setFontSize(11);
        doc.text(cont1, leftSide, shiftContact + 3 * leading);
        doc.setFontSize(12);
        doc.text("Mail", leftSide, shiftContact + 5 * leading);
        doc.setFontSize(11);
        doc.text(cont2, leftSide, shiftContact + 6 * leading, { maxWidth: maxWidthSide });
        doc.setFontSize(12);
        doc.text("LinkedIn ", leftSide, shiftContact + 8 * leading);
        doc.setFontSize(11);
        doc.text(cont3, leftSide, shiftContact + 9 * leading, { maxWidth: maxWidthSide });
        doc.setFontSize(12);
        doc.text("Personal Website", leftSide, shiftContact + 11 * leading);
        doc.setFontSize(11);
        doc.text(cont4, leftSide, shiftContact + 12 * leading, { maxWidth: maxWidthSide });
    }

    //Skill 
    if (true) {
        doc.setFontSize(16);
        doc.setFontStyle("bold");
        doc.text("TOP SKILLS", leftSide, shiftSkill);
        doc.setFontStyle("normal");
        doc.setFontSize(14);
        doc.setTextColor(255, 255, 255);
        doc.text(skl1_1, leftSide, shiftSkill + 2 * leading);
        doc.setFontSize(11);
        doc.setTextColor(160, 160, 160);
        doc.text(skl1_2, leftSide, shiftSkill + 3 * leading, { maxWidth: maxWidthSide });
        doc.setFontSize(14);
        doc.setTextColor(255, 255, 255);
        doc.text(skl2_1, leftSide, shiftSkill + 6 * leading);
        doc.setFontSize(11);
        doc.setTextColor(160, 160, 160);
        doc.text(skl2_2, leftSide, shiftSkill + 7 * leading, { maxWidth: maxWidthSide });
        doc.setFontSize(14);
        doc.setTextColor(255, 255, 255);
        doc.text(skl3_1, leftSide, shiftSkill + 10 * leading);
        doc.setFontSize(11);
        doc.setTextColor(160, 160, 160);
        doc.text(skl3_2, leftSide, shiftSkill + 11 * leading, { maxWidth: maxWidthSide });
    }

    //Experience
    if (numOfExp >= 1) {
        doc.line(leftMain, shiftExperience - yTransLine, leftMain + 25, shiftExperience - yTransLine);
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.setFontStyle("bold");
        doc.text("EXPERIENCE", leftMain, shiftExperience + yTransTitle);
        doc.setFontStyle("normal");

        doc.setFontSize(14);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(exp1_1, leftMain, shiftExperience + shiftExp1 + 1 * leading, { maxWidth: maxWidthMain });
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
        //doc.text(exp1_2, leftMain, shiftExperience + shiftExp1 + 2 * leading, { maxWidth: maxWidthMain });
        doc.setTextColor(100, 100, 100);
        doc.text(exp1_3, leftMain, shiftExperience + shiftExp1 + 2 * leading, { maxWidth: maxWidthMain });
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(exp1_4, leftMain, shiftExperience + shiftExp1 + 0 * leading);
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
        doc.text(exp1_5, leftMain, shiftExperience + shiftExp1 + 3 * leading, { maxWidth: maxWidthMain, align: alignment });
    }
    doc.text("error error error error error error error error error error error", 2000, 2000, { maxWidth: maxWidthMain, align: alignment });
    if (numOfExp >= 2) {
        doc.setFontSize(14);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(exp2_1, leftMain, shiftExperience + shiftExp2 + 1 * leading, { maxWidth: maxWidthMain });
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
        //doc.text(exp2_2, leftMain, shiftExperience + shiftExp2 + 2 * leading, { maxWidth: maxWidthMain });
        doc.setTextColor(100, 100, 100);
        doc.text(exp2_3, leftMain, shiftExperience + shiftExp2 + 2 * leading, { maxWidth: maxWidthMain });
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(exp2_4, leftMain, shiftExperience + shiftExp2 + 0 * leading);
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
        doc.text(exp2_5, leftMain, shiftExperience + shiftExp2 + 3 * leading, { maxWidth: maxWidthMain, align: alignment });
    }
    doc.text("error error error error error error error error error error error", 2000, 2000, { maxWidth: maxWidthMain2, align: alignment });
    if (numOfExp >= 3) {
        doc.setFontSize(14);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(exp3_1, leftMain, shiftExperience + shiftExp3 + 1 * leading, { maxWidth: maxWidthMain });
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
        //doc.text(exp2_2, leftMain, shiftExperience + shiftExp3 + 2 * leading, { maxWidth: maxWidthMain });
        doc.setTextColor(100, 100, 100);
        doc.text(exp3_3, leftMain, shiftExperience + shiftExp3 + 2 * leading, { maxWidth: maxWidthMain });
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(exp3_4, leftMain, shiftExperience + shiftExp3 + 0 * leading);
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
        doc.text(exp3_5, leftMain, shiftExperience + shiftExp3 + 3 * leading, { maxWidth: maxWidthMain, align: alignment });
    }


    //Education
    if (numOfEdu >= 1) {
        doc.line(leftMain, shiftEducation - yTransLine, leftMain + 25, shiftEducation - yTransLine);
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(16);
        doc.setFontStyle("bold");
        doc.text("EDUCATION", leftMain, shiftEducation + yTransTitle);
        doc.setFontStyle("normal");
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(edu1_1, leftMain, shiftEducation + shiftEdu1 + 0 * leading);
        doc.text(edu1_2, leftMain, shiftEducation + shiftEdu1 + 1 * leading);
        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(edu1_3, leftMain, shiftEducation + shiftEdu1 + 2 * leading);
        doc.setTextColor(0, 0, 0);
        doc.text(edu1_4, leftMain, shiftEducation + shiftEdu1 + 3 * leading, { maxWidth: maxWidthMain, align: alignment });
    }
    doc.text("error error error error error error error error error error error", 2000, 2000, { maxWidth: maxWidthMain2, align: alignment });
    if (numOfEdu >= 2) {
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(edu2_1, leftMain, shiftEducation + shiftEdu2 + 0 * leading);
        doc.text(edu2_2, leftMain, shiftEducation + shiftEdu2 + 1 * leading);
        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(edu2_3, leftMain, shiftEducation + shiftEdu2 + 2 * leading);
        doc.setTextColor(0, 0, 0);
        doc.text(edu2_4, leftMain, shiftEducation + shiftEdu2 + 3 * leading, { maxWidth: maxWidthMain, align: alignment });
    }
    doc.text("error error error error error error error error error error error", 2000, 2000, { maxWidth: maxWidthMain2, align: alignment });
    if (numOfEdu >= 3) {
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(edu3_1, leftMain, shiftEducation + shiftEdu3 + 0 * leading);
        doc.text(edu3_2, leftMain, shiftEducation + shiftEdu3 + 1 * leading);
        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(edu3_3, leftMain, shiftEducation + shiftEdu3 + 2 * leading);
        doc.setTextColor(0, 0, 0);
        doc.text(edu3_4, leftMain, shiftEducation + shiftEdu3 + 3 * leading, { maxWidth: maxWidthMain, align: alignment });
    }


    //Award
    if (numOfAwa >= 1) {
        doc.line(leftMain, shiftAward - yTransLine, leftMain + 25, shiftAward - yTransLine);
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.setFontStyle("bold");
        doc.text("AWARDS", leftMain, shiftAward + yTransTitle);
        doc.setFontStyle("normal");
        doc.setFontSize(14);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(awa1_1, leftMain, shiftAward + shiftAwa1 + 0 * leading, { maxWidth: maxWidthMain });
        //doc.text(awa1_2, leftMain, shiftAward + shiftAwa1 + 1 * leading, { maxWidth: maxWidthMain });
        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(awa1_3, leftMain, shiftAward + shiftAwa1 + 2 * leading, { maxWidth: maxWidthMain });
        doc.setTextColor(0, 0, 0);
        //doc.text(awa1_4, leftMain, shiftAward + shiftAwa1 + 3 * leading, { maxWidth: maxWidthMain });
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(awa1_5, leftMain, shiftAward + shiftAwa1 + 1 * leading);
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
        doc.text(awa1_6, leftMain, shiftAward + shiftAwa1 + 3 * leading, { maxWidth: maxWidthMain, align: alignment });
    }
    doc.text("error error error error error error error error error error error", 2000, 2000, { maxWidth: maxWidthMain, align: alignment });
    if (numOfAwa >= 2) {
        doc.setFontSize(14);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(awa2_1, leftMain, shiftAward + shiftAwa2 + 0 * leading, { maxWidth: maxWidthMain });
        //doc.text(awa2_2, leftMain, shiftAward + shiftAwa2 + 1 * leading, { maxWidth: maxWidthMain });
        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(awa2_3, leftMain, shiftAward + shiftAwa2 + 2 * leading, { maxWidth: maxWidthMain });
        doc.setTextColor(0, 0, 0);
        //doc.text(awa2_4, leftMain, shiftAward + shiftAwa2 + 3 * leading, { maxWidth: maxWidthMain });
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(awa2_5, leftMain, shiftAward + shiftAwa2 + 1 * leading);
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
        doc.text(awa2_6, leftMain, shiftAward + shiftAwa2 + 3 * leading, { maxWidth: maxWidthMain, align: alignment });
    }
    doc.text("error error error error error error error error error error error", 2000, 2000, { maxWidth: maxWidthMain2, align: alignment });
    if (numOfAwa >= 3) {
        doc.setFontSize(14);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(awa3_1, leftMain, shiftAward + shiftAwa3 + 0 * leading, { maxWidth: maxWidthMain });
        //doc.text(awa3_2, leftMain, shiftAward + shiftAwa3 + 1 * leading, { maxWidth: maxWidthMain });
        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(awa3_3, leftMain, shiftAward + shiftAwa3 + 2 * leading, { maxWidth: maxWidthMain });
        doc.setTextColor(0, 0, 0);
        //doc.text(awa3_4, leftMain, shiftAward + shiftAwa3 + 3 * leading, { maxWidth: maxWidthMain });
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(awa3_5, leftMain, shiftAward + shiftAwa3 + 1 * leading);
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
        doc.text(awa3_6, leftMain, shiftAward + shiftAwa3 + 3 * leading, { maxWidth: maxWidthMain, align: alignment });
    }


    //Additional
    if (numOfAdd >= 1) {
        doc.line(leftMain, shiftAdditional - yTransLine, leftMain + 25, shiftAdditional - yTransLine);
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(16);
        doc.setFontStyle("bold");
        doc.text(add_title, leftMain, shiftAdditional + yTransTitle);
        doc.setFontStyle("normal");
        doc.setFontSize(14);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(add1_1, leftMain, shiftAdditional + shiftAdd1 + 0 * leading);
        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(add1_2, leftMain, shiftAdditional + shiftAdd1 + 1 * leading);
        doc.setTextColor(0, 0, 0);
        doc.text(add1_3, leftMain, shiftAdditional + shiftAdd1 + 2 * leading, { maxWidth: maxWidthMain, align: alignment });
    }
    doc.text("error error error error error error error error error error error", 2000, 2000, { maxWidth: maxWidthMain2, align: alignment });
    if (numOfAdd >= 2) {
        doc.setFontSize(14);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(add2_1, leftMain, shiftAdditional + shiftAdd2 + 0 * leading);
        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(add2_2, leftMain, shiftAdditional + shiftAdd2 + 1 * leading);
        doc.setTextColor(0, 0, 0);
        doc.text(add2_3, leftMain, shiftAdditional + shiftAdd2 + 2 * leading, { maxWidth: maxWidthMain, align: alignment });
    }
    doc.text("error error error error error error error error error error error", 2000, 2000, { maxWidth: maxWidthMain2, align: alignment });
    if (numOfAdd >= 3) {
        doc.setFontSize(14);
        doc.setTextColor(rgb_r, rgb_g, rgb_b);
        doc.text(add3_1, leftMain, shiftAdditional + shiftAdd3 + 0 * leading);
        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(add3_2, leftMain, shiftAdditional + shiftAdd3 + 1 * leading);
        doc.setTextColor(0, 0, 0);
        doc.text(add3_3, leftMain, shiftAdditional + shiftAdd3 + 2 * leading, { maxWidth: maxWidthMain, align: alignment });
    }


    //Save file
    doc.save('Test.pdf');
}

//Button
const docStyle = document.documentElement.style;
const aElem = document.querySelector('a');
const boundingClientRect = aElem.getBoundingClientRect();
aElem.onmousemove = function (e) {
    const x = e.clientX - boundingClientRect.left;
    const y = e.clientY - boundingClientRect.top;
    const xc = boundingClientRect.width / 2;
    const yc = boundingClientRect.height / 2;
    const dx = x - xc;
    const dy = y - yc;
    docStyle.setProperty('--rx', `${dy / -1}deg`);
    docStyle.setProperty('--ry', `${dx / 10}deg`);
};
aElem.onmouseleave = function (e) {
    docStyle.setProperty('--ty', '0');
    docStyle.setProperty('--rx', '0');
    docStyle.setProperty('--ry', '0');
};
aElem.onmousedown = function (e) {
    docStyle.setProperty('--tz', '-25px');
};
document.body.onmouseup = function (e) {
    docStyle.setProperty('--tz', '-12px');
};


//----------------------------- Smooth scrolling when clicking an anchor link -------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// ////////////////////////////////////////////////////////////////////////////////////////////////////
