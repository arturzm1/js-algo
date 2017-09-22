function writeAlgoDemo() {
    var side_a = Math.random() * 10 + 5;
    var side_b = Math.random() * 10 + 5;
    document.write("Side a=" + side_a + "Side b=" + side_b);
    document.writeln();
    document.write("обьем куба" + side_a * side_a * side_b);
    document.writeln();
    document.write("Площидь квадрата" + side_a * side_a);
    document.writeln();
    document.write("Площадь прямоугольника" + side_a * side_b);
    document.writeln();
}