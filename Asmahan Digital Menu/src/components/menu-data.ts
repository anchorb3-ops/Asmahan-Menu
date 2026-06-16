export type Dish = { name: string; desc?: string };
export type Category = { title: string; dishes: Dish[] };
export type Menu = { title: string; categories: Category[] };

export const lebaneseMenu: Menu = {
  title: "Lebanese Menu",
  categories: [
    {
      title: "Salads",
      dishes: [
        { name: "Betroot Fetta Salad", desc: "Mixed green, fetta cheese, betroot cubes, red onion (lemon oil dressing)" },
        { name: "Tabbouleh", desc: "Minced parsley, diced tomato, mint (lemon oil dressing)" },
        { name: "Tabbouleh Quinoa", desc: "Duo quinoa mixed with minced parsley, diced tomato, mint (lemon oil dressing)" },
        { name: "Fattouch", desc: "Fresh mix of green, cucumber, tomato, bell pepper, onion, radish and crispy bread served with pomegranate olive oil sauce" },
        { name: "Fattouch Asmahan", desc: "Fresh mix of green, cucumber, tomato, bell pepper, onion, radish, pomegranate, crispy eggplant and bread served with pomegranate olive oil sauce" },
      ],
    },
    {
      title: "Cold Mezza",
      dishes: [
        { name: "Hummus", desc: "Ground chickpeas blended with tahini" },
        { name: "Humus Asmahan", desc: "Ground chickpeas blended with tahini and betroot" },
        { name: "Labneh" },
        { name: "Labneh w Toum" },
        { name: "Labnit Asmahan", desc: "Labneh, minced makdouss, walnuts" },
        { name: "Labneh Bkhodra", desc: "Labneh, cucumber, tomato, mint, radish, olive" },
        { name: "Moutabal Asmahan", desc: "Roasted eggplant topped with pomegranate, parsley and walnuts" },
        { name: "Raheb", desc: "Roasted eggplant, bell pepper, diced tomato, onion, sumac" },
        { name: "Moutabal", desc: "Roasted eggplant with tahini sauce" },
        { name: "Wara2 3inab", desc: "Stuffed grape leaves" },
        { name: "Jbneh Baladiye" },
        { name: "Chanklish" },
        { name: "Betroot", desc: "Served with lemon pepper sauce" },
      ],
    },
    {
      title: "Nayeh (Raw)",
      dishes: [
        { name: "Kebbeeh Nayeh" },
        { name: "Tebleh Nayeh" },
        { name: "Marhneh" },
        { name: "Tablieh Nayeh", desc: "Kebbi nayeh, ftileh naye, assbi nayeh, liyeh, kafta nayeh" },
      ],
    },
    {
      title: "Hot Mezza",
      dishes: [
        { name: "Hummus Awarma", desc: "Ground chickpeas blended with tahini topped with crispy awarma beef" },
        { name: "Batat Me2liyi" },
        { name: "Batata Harra", desc: "Fried potato cubes with special harra sauce" },
        { name: "Batata Kouzbara", desc: "Fried potato cubes with Provençal sauce" },
        { name: "Batata Mshwiyi", desc: "Grilled fresh potato" },
        { name: "Mkanek", desc: "Grilled beef sausages with olive oil and lemon juice" },
        { name: "Soujok", desc: "Mixed with special sauce" },
        { name: "Kafta bl Debess", desc: "Kafta balls in a pomegranate sauce" },
        { name: "Kafta with Cherry", desc: "Kafta balls with cherry sauce topped with pistachio" },
        { name: "Kafta with Tahine", desc: "Kafta balls with tahini sauce" },
        { name: "Sawda Djej", desc: "Chicken liver with pomegranate sauce" },
        { name: "Fekhart Halloum", desc: "Grilled halloum and cherry tomato" },
        { name: "Halloum Asmahan", desc: "Grilled halloum with fig jam and roasted walnuts" },
        { name: "Lahme Rass Aassfour", desc: "Grilled rass assfour meat with onion, olive oil and a pinch of salt and pepper" },
        { name: "Samboussek (5 pcs)" },
        { name: "Rkakat Jbneh Me2liye (5 pcs)" },
        { name: "Kebbeh Me2liye (5 pcs)" },
        { name: "Mouaajanet Mshakal (6 pcs)" },
        { name: "Kebbit Asmahan" },
      ],
    },
    {
      title: "Grilled (Mashewe)",
      dishes: [
        { name: "Koros Shahmeh", desc: "Koros zghertewe grilled stuffed with shahmeh" },
        { name: "Koros Lahmeh w Snoubar", desc: "Koros zghertewe grilled stuffed with ground beef, caramelized onion and pine" },
        { name: "Kafta Roll" },
        { name: "Arayis Kafta" },
        { name: "Da2a Mshwiyei" },
        { name: "Da2it Asmahan", desc: "Da2a mchwiyeh, fried potato, garlic, lemon, olive oil" },
        { name: "Shish Taouk 1kg", desc: "Served with biwas bread and dip of garlic" },
        { name: "Shish Taouk 0.5kg", desc: "Served with biwas bread and dip of garlic" },
        { name: "Kafta 1kg", desc: "Served with biwas bread, grilled vegetables and dip of hummus" },
        { name: "Kafta 0.5kg", desc: "Served with biwas bread, grilled vegetables and dip of hummus" },
        { name: "She2af Ghanam 1kg", desc: "Served with biwas bread, grilled vegetables and dip of garlic" },
        { name: "She2af Ghanam 0.5kg", desc: "Served with biwas bread, grilled vegetables and dip of garlic" },
        { name: "Mashawi Mshakal 1kg", desc: "Mixed grilled she2af, taouk and kafta served with biwas bread, grilled vegetables and dip of garlic and hummus" },
        { name: "Mashawi Mshakal 0.5kg", desc: "Mixed grilled she2af, taouk and kafta served with biwas bread, grilled vegetables and dip of garlic and hummus" },
      ],
    },
    {
      title: "Desserts",
      dishes: [
        { name: "Helou Asmahan" },
        { name: "Sultana Asmahan" },
        { name: "Mhalabiye" },
        { name: "Chahrazad" },
      ],
    },
  ],
};

export const internationalMenu: Menu = {
  title: "International Menu",
  categories: [
    {
      title: "Appetizers",
      dishes: [
        { name: "Truffle Fries", desc: "Coated french fries, truffle oil, grana padano cheese, parsley, salt and pepper (served with sour cream)" },
        { name: "Dynamite Shrimp", desc: "Popcorn crispy shrimp with special dynamite sauce" },
        { name: "Sweetened Walnut Shrimp", desc: "Popcorn crispy shrimp with sweetened melted sauce" },
        { name: "Bruschetta", desc: "Crispy baguette, pesto sauce, cherry tomato, parmesan" },
        { name: "Eggplant Parmesiana", desc: "Breaded flat eggplant, tomato sauce, topped with parmesan cheese" },
        { name: "Mac and Cheese", desc: "Elbows pasta, creamy white sauce, melted cheddar baked to perfection" },
        { name: "Loaded Fries", desc: "Coated french fries, cheddar cheese, mayo herbs, jalapeno, sweet and chili" },
        { name: "Coated Fries", desc: "Served with ketchup" },
        { name: "Potato Wedges", desc: "Served with sweet and chili sauce" },
        { name: "Twister", desc: "Served with melted cheddar" },
      ],
    },
    {
      title: "Salads",
      dishes: [
        { name: "Chicken Caesar Salad", desc: "Marinated grilled chicken breast, roman lettuce, parmesan cheese, croutons (classic caesar dressing)" },
        { name: "Kani Salad", desc: "Japanese crab sticks, mango, avocado, carrots, cucumber, sesame with special dressing" },
        { name: "Goat Cheese Salad", desc: "Goat cheese, mixed mesclun, caramelized onions, fig, pomegranate, strawberry, apple (honey rosemary dressing)" },
        { name: "Bresaola Arugula", desc: "Bresaola, arugula, cherry tomato, grana padano cheese (balsamic dressing)" },
        { name: "Buffala Cheese", desc: "Buffala cheese, mixed mesclun, sun-dried tomato, walnuts (lemon oil)" },
        { name: "Arugula Mushroom", desc: "Arugula, pecan, raspberry, parmesan, fresh mushrooms, apple, cherry tomato (citrus vinegar dressing)" },
        { name: "Chicken Kale Salad", desc: "Grilled chicken, kale, pomegranate, mango, orange, pecan (balsamic dressing)" },
        { name: "Halloumi Quinoa Salad", desc: "Grilled halloum, quinoa, cherry tomato, cucumber, pomegranate, orange (honey rosemary dressing)" },
      ],
    },
    {
      title: "Gluten Free",
      dishes: [
        { name: "Chicken Delight", desc: "Cereals bread stuffed with grilled chicken breast, arugula, cherry tomato served with mesclun salad" },
        { name: "Halloumi Pesto", desc: "Cereals bread, grilled halloum, pesto sauce, cherry tomato, arugula served with mesclun salad" },
        { name: "Gnocchi" },
      ],
    },
    {
      title: "Sandwiches",
      dishes: [
        { name: "Salmon Sunrise", desc: "Sourdough bread, creamy cheese, smoked salmon, capers, lemon served with mesclun salad" },
        { name: "Club Chicken", desc: "3 layers of pain de mie, grilled chicken breast, boiled eggs, ham, cheese, lettuce, tomato served with mesclun salad" },
        { name: "Club Salmon", desc: "3 layers of pain de mie, smoked salmon, lemon, capers, creamy cheese served with mesclun salad" },
        { name: "Chicken Caesar Wrap", desc: "Marinated chicken breast, tortilla bread, cherry tomato, lettuce, parmesan, caesar dressing served with fries" },
        { name: "Chicken Sub", desc: "Seasoned grilled chicken, fresh mushroom, mozzarella, emmental, parmesan cheese served with coated fries" },
        { name: "Steak Sand", desc: "Shredded beef, mozzarella, mayo, onion, mushroom served with fries" },
        { name: "Philly Steak", desc: "Grilled tender beef, onion, green pepper, dill pickles, creamy cheese served with fries" },
      ],
    },
    {
      title: "Burgers",
      dishes: [
        { name: "Classic Beef Burger", desc: "150 g beef patty, onion, dill pickles, lettuce, tomato, cheddar slice, chef's special sauce served with fries" },
        { name: "Truffle Burger", desc: "150 g beef patty, truffle paste, emmental cheese, truffle mayo served with fries" },
        { name: "Asmahan Burger", desc: "100g x2 beef patty, apple, maple syrup, fresh mushroom, special sauce served with fries" },
        { name: "Crispy Chicken Burger", desc: "Crispy chicken strips, garlic mayo, dill pickles, lettuce served with fries" },
        { name: "Mozzarella Chicken Burger", desc: "Crispy chicken strips, breaded mozzarella patty, tomato, mayo sauce, lettuce served with fries" },
        { name: "Cheddary Chicken Burger", desc: "Crispy chicken strips, melted cheddar, potato stick, dill pickles served with fries" },
      ],
    },
    {
      title: "Pasta",
      dishes: [
        { name: "Aglio Olio", desc: "Linguine pasta, garlic, olive oil, parmesan cheese, parsley, chili flakes" },
        { name: "Ravioli Spinach", desc: "Ravioli spinach in a creamy white sauce topped with parmesan cheese" },
        { name: "Penne Arabiata", desc: "Penne pasta in a tomato sauce topped with grana padano cheese" },
        { name: "Fettucini Alpolo", desc: "Grilled chicken breast, fresh mushroom, cream, grana padano" },
        { name: "Penne Pesto", desc: "Penne pasta in a creamy pesto sauce" },
      ],
    },
    {
      title: "Main Course — Chicken",
      dishes: [
        { name: "Poulet Epinard", desc: "Grilled chicken in a verde creamy sauce served with mashed potato and sautéed vegetables" },
        { name: "Chicken Mushroom", desc: "Grilled chicken with mushroom sauce served with french fries and sautéed vegetables" },
        { name: "Truffle Chicken", desc: "Grilled chicken in a creamy truffle sauce served with wedges and sautéed vegetables" },
        { name: "Honey Ginger Chicken", desc: "Grilled chicken, honey ginger sauce, orange, served with grilled potato and sautéed vegetables" },
        { name: "Chicken Escalope", desc: "Breaded chicken breast served with spaghetti milanese and cocktail sauce" },
        { name: "Chicken Roulade", desc: "Chicken breast stuffed with ham and three cheese served with fries, sautéed vegetables and mushroom sauce" },
        { name: "Chicken Crispy", desc: "Golden crispy chicken breast with fries and mesclun salad" },
        { name: "Grilled Chicken Breast", desc: "Grilled chicken breast, sautéed vegetables, grilled potato served with alfredo sauce" },
      ],
    },
    {
      title: "Main Course — Beef",
      dishes: [
        { name: "Pepper Steak", desc: "250 g beef tenderloin with classic french pepper sauce served with french fries and sautéed vegetables" },
        { name: "Filet de Boeuf", desc: "250 g beef tenderloin served with grilled potato and mixed greens" },
        { name: "Beef Cordon Bleu", desc: "Beef stuffed with ham, emmental and three cheese served with fries and mesclun salad" },
      ],
    },
    {
      title: "Main Course — Seafood",
      dishes: [
        { name: "Salmon Tuscana", desc: "Grilled salmon in a creamy lemon sauce served with mashed potatoes and sautéed vegetables" },
        { name: "Filet de Daurade", desc: "Grilled fish served with grilled potato and mixed mesclun" },
      ],
    },
    {
      title: "Main Course — Rice",
      dishes: [
        { name: "Beef Bourguignon", desc: "Cube beef, bell pepper, fresh mushroom, onion served with rice" },
        { name: "Beef Teriyaki", desc: "Shredded tenderloin beef, teriyaki sauce, sesame, green onion served with rice" },
        { name: "Sweet and Sour Shrimp", desc: "Grilled shrimp, pineapple, multicolor bell pepper, sweet and sour sauce served with rice" },
        { name: "Sweet and Sour Chicken", desc: "Grilled chicken breast, pineapple, multicolor bell pepper, sweet and sour sauce served with rice" },
      ],
    },
    {
      title: "Kids Menu",
      dishes: [
        { name: "Mini Burger" },
        { name: "Chicken Nuggets" },
        { name: "Chicken Tender" },
      ],
    },
    {
      title: "Desserts",
      dishes: [
        { name: "Fondant" },
        { name: "Pain Perdue" },
        { name: "Crème Brûlée" },
        { name: "Tiramisu" },
        { name: "Cheese Cake" },
      ],
    },
  ],
};

export const setMenus = [
  {
    title: "Formule 1",
    items: [
      "Tabbouleh", "Fattouch", "Hummus", "Labneh", "Moutabal", "Wara2 3inab",
      "Jbneh Baladiye", "Chanklish", "Kebbeeh Nayeh", "Batat Me2liyi",
      "Batata Kouzbara", "Mkanek", "Soujok", "Sawda Djej", "Mouaajanet Mshakal",
      "Mashawi Mshakal",
    ],
  },
  {
    title: "Premium",
    items: [
      "Betroot Fetta Salad", "Fattouch Asmahan", "Humus Asmahan", "Labnit Asmahan",
      "Moutabal Asmahan", "Wara2 3enab Labne", "Jbneh Baladiye", "Chanklish",
      "Kebbeeh Nayeh", "Tablieh Nayeh", "Hummus Awarma", "Batat Me2liyi",
      "Batata Kouzbara", "Mkanek", "Soujok", "Kafta bl Karaz", "Sawda Djej",
      "Halloum Asmahan", "Mouaajanet Mshakal", "Arayis Kafta", "Mashawi Mshakal",
    ],
  },
];