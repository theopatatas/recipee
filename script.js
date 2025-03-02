document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const menuToggle = document.querySelector(".menu-toggle")
    const navLinks = document.querySelector(".nav-links")
    const dropdowns = document.querySelectorAll(".dropdown")
    const allRecipesLink = document.querySelector(".nav-item")
    const exploreButton = document.querySelector(".cta-button")
    const recipeGrid = document.querySelector(".recipe-grid")
    const featuredRecipesTitle = document.querySelector(".featured-recipes h2")
  
    // Recipe data
    const recipeData = {
      breakfast: [
        {
          title: "Quick Breakfast Bowl",
          description: "Start your day with this nutritious and easy-to-prepare breakfast bowl.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Fluffy Pancakes",
          description: "Classic fluffy pancakes that are perfect for a weekend breakfast.",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
      lunch: [
        {
          title: "Budget Lunch Pack",
          description: "Perfect for bringing to school - affordable and delicious lunch ideas.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Quick Sandwich",
          description: "A nutritious sandwich that can be prepared in minutes.",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
      dinner: [
        {
          title: "Adobo",
          description: "Simple dinner recipes you can make.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "One-Pot Pasta",
          description: "Easy pasta dish that requires just one pot - perfect for busy students.",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
      desserts: [
        {
          title: "No-Bake Cookies",
          description: "Delicious cookies that don't require an oven.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Microwave Mug Cake",
          description: "Sweet treat that can be made in minutes using just a microwave.",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
      chicken: [
        {
          title: "Easy Chicken Adobo",
          description: "A simple version of the Filipino classic that's perfect for students.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Chicken Sandwich",
          description: "Delicious chicken sandwich that's easy to make.",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
      pork: [
        {
          title: "Simple Pork Stir Fry",
          description: "Quick and easy pork stir fry with vegetables.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Pork Sinigang",
          description: "A comforting Filipino sour soup with pork and vegetables.",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
      beef: [
        {
          title: "Easy Beef Tapa",
          description: "A simplified version of the Filipino breakfast favorite.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Beef with Broccoli",
          description: "Classic beef and broccoli stir fry that's quick to prepare.",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
      seafood: [
        {
          title: "Simple Fish Fillet",
          description: "Easy pan-fried fish fillet with minimal ingredients.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Tuna Pasta",
          description: "Quick pasta dish using canned tuna - budget-friendly and delicious.",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
      vegetables: [
        {
          title: "Vegetable Stir Fry",
          description: "Healthy vegetable stir fry that's quick and nutritious.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Pinakbet",
          description: "Traditional Filipino vegetable dish that's easy to prepare.",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
      grade9: [
        {
          title: "Simple Spaghetti",
          description: "Easy spaghetti recipe perfect for Grade 9 cooking class.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Basic Pancakes",
          description: "Learn the fundamentals of making pancakes.",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
      grade10: [
        {
          title: "Chicken Curry",
          description: "A more advanced recipe suitable for Grade 10 students.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Homemade Pizza",
          description: "Create your own pizza from scratch - perfect for Grade 10 projects.",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    }
  
    // Functions
    const toggleMobileMenu = () => {
      navLinks.classList.toggle("active")
      const spans = menuToggle.querySelectorAll("span")
      spans.forEach((span, index) => {
        if (navLinks.classList.contains("active")) {
          span.style.transform = index === 1 ? "scale(0)" : `rotate(${index === 0 ? 45 : -45}deg)`
        } else {
          span.style.transform = "none"
        }
      })
    }
  
    const displayRecipes = (category) => {
      const recipes = recipeData[category]
      if (!recipes) {
        console.error(`No recipes found for category: ${category}`)
        return
      }
  
      featuredRecipesTitle.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Recipes`
      recipeGrid.innerHTML = recipes
        .map(
          (recipe) => `
        <div class="recipe-card">
          <img src="${recipe.image}" alt="${recipe.title}">
          <div class="recipe-content">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
          </div>
        </div>
      `,
        )
        .join("")
  
      scrollToRecipes()
    }
  
    const displayDefaultRecipes = () => {
      featuredRecipesTitle.textContent = "Featured Recipes"
      recipeGrid.innerHTML = `
        <div class="recipe-card">
          <img src="/placeholder.svg?height=200&width=300" alt="Quick Breakfast Bowl">
          <div class="recipe-content">
            <h3>Quick Breakfast Bowl</h3>
            <p>Start your day with this nutritious and easy-to-prepare breakfast bowl.</p>
          </div>
        </div>
        <div class="recipe-card">
          <img src="/placeholder.svg?height=200&width=300" alt="Budget Lunch Pack">
          <div class="recipe-content">
            <h3>Budget Lunch Pack</h3>
            <p>Perfect for bringing to school - affordable and delicious lunch ideas.</p>
          </div>
        </div>
        <div class="recipe-card">
          <img src="/placeholder.svg?height=200&width=300" alt="Adobo">
          <div class="recipe-content">
            <h3>Adobo</h3>
            <p>Simple dinner recipes you can make.</p>
          </div>
        </div>
      `
      scrollToRecipes()
    }
  
    const scrollToRecipes = () => {
      document.getElementById("recipes").scrollIntoView({ behavior: "smooth" })
    }
  
    // Event Listeners
    menuToggle.addEventListener("click", toggleMobileMenu)
  
    dropdowns.forEach((dropdown) => {
      const links = dropdown.querySelectorAll(".dropdown-content a")
      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault()
          const category = link.textContent.toLowerCase().replace(/\s+/g, "")
          displayRecipes(category)
        })
      })
    })
  
    allRecipesLink.addEventListener("click", (e) => {
      e.preventDefault()
      displayDefaultRecipes()
    })
  
    exploreButton.addEventListener("click", (e) => {
      e.preventDefault()
      scrollToRecipes()
    })
  
    // Mobile dropdown toggle
    if (window.innerWidth <= 768) {
      dropdowns.forEach((dropdown) => {
        const dropdownToggle = dropdown.querySelector(".dropbtn")
        dropdownToggle.addEventListener("click", (e) => {
          e.preventDefault()
          dropdown.classList.toggle("active")
        })
      })
    }
  })
  
  
