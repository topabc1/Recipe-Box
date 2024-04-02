document.addEventListener("DOMContentLoaded", () => {
	
	let current = 1;
	
	if(!localStorage.getItem("recipe-count")) {
		localStorage.setItem("recipe-count", '5');
		
		localStorage.setItem("recipe-title-1", "Artichoke Pasta");
		localStorage.setItem("recipe-ingredients-1", `2 tablespoons butter \ 2 cloves garlic, minced \ 1 cup heavy cream \ 3/4 teaspoon salt \ 1 teaspoon fresh-ground black pepper \ 2 1/2 cups canned, drained artichoke hearts (two 14-ounce cans), rinsed and cut into halves or quarters \ 3/4 pound fusilli \ 1/2 cup grated Parmesan cheese \ 2 tablespoons chopped chives, scallion tops, or parsley`);
		localStorage.setItem("recipe-directions-1", `In a medium saucepan, melt the butter over moderately low heat. Add the garlic and cook for 30 seconds. Stir in the cream, salt, pepper, and artichoke hearts. Cook until just heated through, about 3 minutes. \

In a large pot of boiling, salted water, cook the fusilli until just done, about 13 minutes. Drain the pasta and toss with the cream sauce, Parmesan, and chives.`);

		localStorage.setItem("recipe-title-2", "Garlic Chicken");
		localStorage.setItem("recipe-ingredients-2", `3 tablespoons butter \ 1 teaspoon seasoning salt \ 1 teaspoon onion powder  \ 4 skinless, boneless chicken breast halves \ 2 teaspoons garlic powder`);
		localStorage.setItem("recipe-directions-2", `Melt butter in a large skillet over medium high heat. \

Add chicken and sprinkle with garlic powder, seasoning salt and onion powder. \

Saute about 10 to 15 minutes on each side, or until chicken is cooked through and juices run clear.`);
		
		localStorage.setItem("recipe-title-3", "Easy Chocolate Pie");
		localStorage.setItem("recipe-ingredients-3", `1 (12 ounce) can evaporated milk \ 1 (5.9 ounce) package chocolate instant pudding mix \ 1 (6.5 ounce) can whipped cream \ 1/2 cup miniature semi-sweet chocolate chips (optional) \ 1 (9 inch) graham cracker pie crust \ Another can of whipped cream for garnish (optional)`);
		localStorage.setItem("recipe-directions-3", `Pour milk into medium bowl. Add dry pudding mix; beat with wire whisk until well blended and mixture just begins to thicken. Stir in half of the chocolate chips. \

Add contents of whipped cream can; stir gently but quickly until well blended. Pour into crust; cover. \

Refrigerate 6 hours, or until set. Cut into 8 slices to serve. Garnish with additional whipped cream and remaining chocolate chips, if desired.`);
		
		localStorage.setItem("recipe-title-4", "Lime Chicken Tacos");
		localStorage.setItem("recipe-ingredients-4", `1 1/2 pounds skinless, boneless chicken breast meat - cubed \ 1/8 cup red wine vinegar \ 1/2 lime, juiced \ 1 teaspoon white sugar \ 1/2 teaspoon salt \ 1/2 teaspoon ground black pepper \ 2 green onions, chopped \ 2 cloves garlic, minced \ 1 teaspoon dried oregano \ 10 (6 inch) corn tortillas \ 1 tomato, diced \ 1/4 cup shredded lettuce \ 1/4 cup shredded Monterey Jack cheese \ 1/4 cup salsa`);
		localStorage.setItem("recipe-directions-4", `Saute chicken in a medium saucepan over medium high heat for about 20 minutes. Add vinegar, lime juice, sugar, salt, pepper, green onion, garlic and oregano. Simmer for an extra 10 minutes. \

Heat an iron skillet over medium heat. Place a tortilla in the pan, warm, and turn over to heat the other side. Repeat with remaining tortillas. Serve lime chicken mixture in warm tortillas topped with tomato, lettuce, cheese and salsa.`);
		
		localStorage.setItem("recipe-title-5", "Artichoke Dip");
		localStorage.setItem("recipe-ingredients-5", `1 8oz package soft cream cheese \ 4oz mayonnaise \ 4oz sour cream \ 1/4 Cup Fresh Grated Parmesan Cheese \ 1/4 Cup Fresh Grated Romano Cheese \ 2 eggs \ 3/4 Cup dairy sour cream \ 1 16oz can artichoke hearts \ 1/4 Cup fresh chopped chives \ 1 tbs fresh minced garlic`);
		localStorage.setItem("recipe-directions-5", `Soften the cream cheese before mixing. \

Rinse well, then dice the artichokes into small ½” size pieces. \

Into a mixing bowl place the softened cream cheese. Mix in the mayonnaise, sour cream, the Parmesan and Romano cheese, artichokes and garlic. \

When the mixture is fairly well blended, spoon into a 9” round glass pie dish. \

Set Oven to Bake at 350 degrees. \

Place un-covered dish into oven for 20 – 25 minutes until the edges appear slightly golden and mixture is bubbling at the edge. \

Remove and sprinkle chopped chives on top and let cool about 5 minutes before serving. \

Enjoy!`);
	}
	
	document.querySelector("#current-recipe h2").innerHTML = localStorage.getItem(`recipe-title-${current}`);
	document.querySelector("#recipes").innerHTML = '';
	
	for(let i = 1; i <= Number(localStorage.getItem("recipe-count")); i++) {
		document.querySelector("#recipes").innerHTML += `
			<li>${localStorage.getItem(`recipe-title-${i}`)}</li>
		`;
	}
	
	Array.from(document.querySelectorAll("#recipes li")).forEach((item, index) => {
		item.addEventListener("click", () => {
			current = index + 1;
			
			document.querySelector("#current-recipe h2").innerHTML = localStorage.getItem(`recipe-title-${current}`);
			
			let ingredients = localStorage.getItem(`recipe-ingredients-${current}`).split("  ");
			let directions = localStorage.getItem(`recipe-directions-${current}`).split("\n");

			document.querySelector("#display").innerHTML = '';
			document.querySelector("#display").innerHTML = `
				<h3>Ingredients:</h3>
				<ul id="ingredients">

				</ul>
				<ol id="directions">

				</ol>
			`;

			ingredients.forEach((item, index) => {
				document.querySelector("#ingredients").innerHTML += `
					<li>${item}</li>
				`;
			});
			directions.forEach((item, index) => {
				document.querySelector("#directions").innerHTML += `
					<li>${item}</li>
				`;
			});
		})
	});

	let ingredients = localStorage.getItem(`recipe-ingredients-${current}`).split("  ");
	let directions = localStorage.getItem(`recipe-directions-${current}`).split("\n");

	document.querySelector("#display").innerHTML = '';
	document.querySelector("#display").innerHTML = `
		<h3>Ingredients:</h3>
		<ul id="ingredients">

		</ul>
		<h3>Directions:</h3>
		<ol id="directions">

		</ol>
	`;
	
	document.querySelector("#recipe-title").value = localStorage.getItem(`recipe-title-${current}`);
	document.querySelector("#recipe-ingredients").innerHTML = '';
	document.querySelector("#recipe-directions").innerHTML = '';
	
	ingredients.forEach((item, index) => {
		document.querySelector("#ingredients").innerHTML += `
			<li>${item}</li>
		`;
		if(index < ingredients.length - 1) {
			document.querySelector("#recipe-ingredients").innerHTML += `${item} \\ `;
		} else {
			document.querySelector("#recipe-ingredients").innerHTML += item;
		}
	});
	directions.forEach((item, index) => {
		document.querySelector("#directions").innerHTML += `
			<li>${item}</li>
		`;
		if(index < directions.length - 1) {
			document.querySelector("#recipe-directions").innerHTML += `${item} \\\n`;
		} else {
			document.querySelector("#recipe-directions").innerHTML += item;
		}
	});
	
	document.querySelector("#edit-btn").addEventListener("click", () => {
		document.querySelector("#edit-screen").style.display = "block";
		document.querySelector("#overlay").style.display = "block";
		document.querySelector("#edit-screen-save-btn").removeEventListener("click", editScreenSaveBtnClickEventListener);
		document.querySelector("#edit-screen-save-btn").addEventListener("click", editScreenSaveBtnClickEventListener);
		document.querySelector("#edit-screen-close-btn").removeEventListener("click", editScreenCloseBtnClickEventListener);
		document.querySelector("#edit-screen-close-btn").addEventListener("click", editScreenCloseBtnClickEventListener);
		
		function editScreenSaveBtnClickEventListener() {
			localStorage.setItem(`recipe-title-${current}`, document.querySelector("#recipe-title").value);
			localStorage.setItem(`recipe-ingredients-${current}`, document.querySelector("#recipe-ingredients").value);
			localStorage.setItem(`recipe-directions-${current}`, document.querySelector("#recipe-directions").value);
			
			let ingredients = localStorage.getItem(`recipe-ingredients-${current}`).split("  ");
			let directions = localStorage.getItem(`recipe-directions-${current}`).split("\n");
			
			document.querySelector("#overlay").style.display = "none";
			document.querySelector("#edit-screen").style.display = "none";
			document.querySelector("#current-recipe h2").innerHTML = localStorage.getItem(`recipe-title-${current}`);
			document.querySelector("#display").innerHTML = '';
			document.querySelector("#display").innerHTML = `
				<h3>Ingredients:</h3>
				<ul id="ingredients">

				</ul>
				<h3>Directions:</h3>
				<ol id="directions">

				</ol>
			`;

			document.querySelector("#recipe-title").value = localStorage.getItem(`recipe-title-${current}`);
			document.querySelector("#recipe-ingredients").innerHTML = '';
			document.querySelector("#recipe-directions").innerHTML = '';

			ingredients.forEach((item, index) => {
				document.querySelector("#ingredients").innerHTML += `
					<li>${item}</li>
				`;
				if(index < ingredients.length - 1) {
					document.querySelector("#recipe-ingredients").innerHTML += `${item} \\ `;
				} else {
					document.querySelector("#recipe-ingredients").innerHTML += item;
				}
			});
			directions.forEach((item, index) => {
				document.querySelector("#directions").innerHTML += `
					<li>${item}</li>
				`;
				if(index < directions.length - 1) {
					document.querySelector("#recipe-directions").innerHTML += `${item} \\\n`;
				} else {
					document.querySelector("#recipe-directions").innerHTML += item;
				}
			});
		}
		function editScreenCloseBtnClickEventListener() {
			document.querySelector("#overlay").style.display = "none";
			document.querySelector("#edit-screen").style.display = "none";
		}
	});
	document.querySelector("#add-btn").addEventListener("click", () => {
		document.querySelector("#add-screen").style.display = "block";
		document.querySelector("#overlay").style.display = "block";
	});
	
	document.querySelector("#add-screen-add-btn").addEventListener("click", addScreenAddBtnClickEventListener);
		document.querySelector("#add-screen-close-btn").addEventListener("click", addScreenCloseBtnClickEventListener);
		
		function addScreenAddBtnClickEventListener() {
			current++;
			
			document.querySelector("#add-screen").style.display = "none";
			document.querySelector("#overlay").style.display = "none";
			
			localStorage.setItem("recipe-count", `${Number(localStorage.getItem("recipe-count")) + 1}`);
			localStorage.setItem(`recipe-title-${localStorage.getItem("recipe-count")}`, document.querySelector("#recipe-title-add").value);
			localStorage.setItem(`recipe-ingredients-${localStorage.getItem("recipe-count")}`, document.querySelector("#recipe-ingredients-add").value);
			localStorage.setItem(`recipe-directions-${localStorage.getItem("recipe-count")}`, document.querySelector("#recipe-directions-add").value);
			document.querySelector("#current-recipe h2").innerHTML = localStorage.getItem(`recipe-title-${current}`);
			document.querySelector("#recipes").innerHTML = '';
	console.log(localStorage.getItem("recipe-count"));
			for(let i = 1; i <= Number(localStorage.getItem("recipe-count")); i++) {
				document.querySelector("#recipes").innerHTML += `
					<li>${localStorage.getItem(`recipe-title-${i}`)}</li>
				`;
			}

			Array.from(document.querySelectorAll("#recipes li")).forEach((item, index) => {
				item.removeEventListener("click", itemClickEventListener);
				item.addEventListener("click", itemClickEventListener);
				
				function itemClickEventListener() {
					let current2 = index + 1;

					document.querySelector("#current-recipe h2").innerHTML = localStorage.getItem(`recipe-title-${current2}`);

					let ingredients = localStorage.getItem(`recipe-ingredients-${current2}`).split("  ");
					let directions = localStorage.getItem(`recipe-directions-${current2}`).split("\n");

					document.querySelector("#display").innerHTML = '';
					document.querySelector("#display").innerHTML = `
						<h3>Ingredients:</h3>
						<ul id="ingredients">

						</ul>
						<ol id="directions">

						</ol>
					`;

					ingredients.forEach((item, index) => {
						document.querySelector("#ingredients").innerHTML += `
							<li>${item}</li>
						`;
					});
					directions.forEach((item, index) => {
						document.querySelector("#directions").innerHTML += `
							<li>${item}</li>
						`;
					});
				}
			});
			
			let ingredients = localStorage.getItem(`recipe-ingredients-${current}`).split("  ");
			let directions = localStorage.getItem(`recipe-directions-${current}`).split("\n");

			document.querySelector("#display").innerHTML = '';
			document.querySelector("#display").innerHTML = `
				<h3>Ingredients:</h3>
				<ul id="ingredients">

				</ul>
				<h3>Directions:</h3>
				<ol id="directions">

				</ol>
			`;
			
			document.querySelector("#recipe-title").value = localStorage.getItem(`recipe-title-${current}`);
			document.querySelector("#recipe-ingredients").innerHTML = '';
			document.querySelector("#recipe-directions").innerHTML = '';

			ingredients.forEach((item, index) => {
				document.querySelector("#ingredients").innerHTML += `
					<li>${item}</li>
				`;
				if(index < ingredients.length - 1) {
					document.querySelector("#recipe-ingredients").innerHTML += `${item} \\ `;
				} else {
					document.querySelector("#recipe-ingredients").innerHTML += item;
				}
			});
			directions.forEach((item, index) => {
				document.querySelector("#directions").innerHTML += `
					<li>${item}</li>
				`;
				if(index < directions.length - 1) {
					document.querySelector("#recipe-directions").innerHTML += `${item} \\\n`;
				} else {
					document.querySelector("#recipe-directions").innerHTML += item;
				}
			});
		}
		function addScreenCloseBtnClickEventListener() {
			document.querySelector("#add-screen").style.display = "none";
			document.querySelector("#overlay").style.display = "none";
		}
	document.querySelector("#delete-btn").addEventListener("click", () => {
		if(confirm(`Are you sure you want to delete "${localStorage.getItem(`recipe-title-${current}`)}" from the Recipe Box?`)) {
			localStorage.removeItem(`recipes-title-${current}`);
			localStorage.removeItem(`recipes-ingredients-${current}`);
			localStorage.removeItem(`recipes-directions-${current}`);
			
			document.querySelector("#recipes").innerHTML = document.querySelector("#recipes").innerHTML.replace(`<li>${localStorage.getItem(`recipe-title-${current}`)}</li>`, '');
			
			if(current === Number(localStorage.getItem("recipe-count"))) {
				current--;
			} else {
				for(let i = current + 1; i <= Number(localStorage.getItem("recipe-count")); i++) {
					const tempTitle = localStorage.getItem(`recipe-title-${i}`);
					localStorage.removeItem(`recipe-title-${i}`);
					localStorage.setItem(`recipe-title-${i - 1}`, tempTitle);
					
					const tempIngredients = localStorage.getItem(`recipe-ingredients-${i}`);
					localStorage.removeItem(`recipe-ingredients-${i}`);
					localStorage.setItem(`recipe-ingredients-${i - 1}`, tempIngredients);
					
					const tempDirections = localStorage.getItem(`recipe-directions-${i}`);
					localStorage.removeItem(`recipe-directions-${i}`);
					localStorage.setItem(`recipe-directions-${i - 1}`, tempDirections);
				}
			}
			
			localStorage.setItem("recipe-count", `${Number(localStorage.getItem("recipe-count")) - 1}`);
			
			document.querySelector("#current-recipe h2").innerHTML = localStorage.getItem(`recipe-title-${current}`);
			document.querySelector("#recipes").innerHTML = '';
	
			for(let i = 1; i <= Number(localStorage.getItem("recipe-count")); i++) {
				document.querySelector("#recipes").innerHTML += `
					<li>${localStorage.getItem(`recipe-title-${i}`)}</li>
				`;
			}

			Array.from(document.querySelectorAll("#recipes li")).forEach((item, index) => {
				item.removeEventListener("click", itemClickEventListener);
				item.addEventListener("click", itemClickEventListener);
				
				function itemClickEventListener() {
					current = index + 1;

					document.querySelector("#current-recipe h2").innerHTML = localStorage.getItem(`recipe-title-${current}`);

					let ingredients = localStorage.getItem(`recipe-ingredients-${current}`).split("  ");
					let directions = localStorage.getItem(`recipe-directions-${current}`).split("\n");

					document.querySelector("#display").innerHTML = '';
					document.querySelector("#display").innerHTML = `
						<h3>Ingredients:</h3>
						<ul id="ingredients">

						</ul>
						<ol id="directions">

						</ol>
					`;

					ingredients.forEach((item, index) => {
						document.querySelector("#ingredients").innerHTML += `
							<li>${item}</li>
						`;
					});
					directions.forEach((item, index) => {
						document.querySelector("#directions").innerHTML += `
							<li>${item}</li>
						`;
					});
				}
			});
			
			let ingredients = localStorage.getItem(`recipe-ingredients-${current}`).split("  ");
			let directions = localStorage.getItem(`recipe-directions-${current}`).split("\n");

			document.querySelector("#display").innerHTML = '';
			document.querySelector("#display").innerHTML = `
				<h3>Ingredients:</h3>
				<ul id="ingredients">

				</ul>
				<h3>Directions:</h3>
				<ol id="directions">

				</ol>
			`;
			
			document.querySelector("#recipe-title").value = localStorage.getItem(`recipe-title-${current}`);
			document.querySelector("#recipe-ingredients").innerHTML = '';
			document.querySelector("#recipe-directions").innerHTML = '';

			ingredients.forEach((item, index) => {
				document.querySelector("#ingredients").innerHTML += `
					<li>${item}</li>
				`;
				if(index < ingredients.length - 1) {
					document.querySelector("#recipe-ingredients").innerHTML += `${item} \\ `;
				} else {
					document.querySelector("#recipe-ingredients").innerHTML += item;
				}
			});
			directions.forEach((item, index) => {
				document.querySelector("#directions").innerHTML += `
					<li>${item}</li>
				`;
				if(index < directions.length - 1) {
					document.querySelector("#recipe-directions").innerHTML += `${item} \\\n`;
				} else {
					document.querySelector("#recipe-directions").innerHTML += item;
				}
			});
		}
	});
});