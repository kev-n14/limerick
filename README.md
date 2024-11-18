# Discover Limerick - Website

**Discover Limerick** is your ultimate guide to exploring the rich heritage, breathtaking sights, and vibrant culture of Limerick, Ireland. This website provides detailed information about local attractions, upcoming events, dining spots, and more. It serves as a hub for travelers looking to experience the best that Limerick has to offer.

## Table of Contents
1. [Features](#features)
2. [Pages](#pages)
3. [Technologies Used](#technologies-used)
4. [Setup](#setup)
5. [Folder Structure](#folder-structure)
6. [Contributing](#contributing)

---

## Features

## Pages

### 1. **Home**
- **Description:**  
  The homepage greets visitors with an engaging banner image of Limerick, providing an introduction to the site. The "Our Aim" section outlines the purpose of the site, while the "Why Visit Limerick" section highlights the key reasons why Limerick is a must-see destination. Additionally, there are sections on places to visit and upcoming events.

### 2. **About Us**
- **Description:**  
  This page provides information about the **Discover Limerick** project, its mission, and its team. Visitors will learn more about the website’s goals and how it aims to promote tourism and the local culture of Limerick.

### 3. **Contact Us**
- **Description:**  
  The Contact Us page enables visitors to get in touch with the Discover Limerick team. This page includes contact forms, phone numbers, and email addresses for inquiries, feedback, or support.

### 4. **Attractions**
- **Description:**  
  This page showcases the must-see attractions in Limerick, including historical landmarks, cultural sites, and recreational spots. Key locations like **King John's Castle**, **St. Mary's Cathedral**, and **Thomond Park** are featured with detailed descriptions and external links for further information.

### 5. **Cart**
- **Description:**  
  The Cart page allows users to view their selected items, which may include booking tickets for events, tours, or other services related to Limerick tourism. It serves as the checkout area for purchasing tickets or making reservations.


---

## Technologies Used

- **HTML5**: For structuring the website content.
- **CSS3**: For styling the website, using custom styles as well as Bootstrap for responsive design.
- **Bootstrap 5**: Used for grid layouts, buttons, forms, and responsiveness.
- **Django**: Framework for the backend with template rendering and static file management.
- **Font Awesome**: For icons used in navigation and event listings.
  
---

## Setup

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/discover-limerick.git
   ```

2. **Run the Django server**:
   ```bash
   python manage.py runserver
   ```

3. **Navigate to `http://127.0.0.1:8000/`** to view the website locally.

---

## Folder Structure

basic folder structure for Discover Limerick website:

```
discover-limerick/
│
├── discover_limerick/        # Django app
│   ├── migrations/           # Database migrations
│   ├── templates/            # HTML template files
│   │   ├── base.html         # Base template
│   │   ├── nav_bar.html      # Navigation bar
│   │   ├── footer.html       # Footer template
│   │   ├── index.html        # Home page template
│   │   ├── about.html        # About page template
│   │   └── contact.html      # Contact page template
│   ├── static/               # Static files (CSS, images)
│   │   ├── images/           # Image assets
│   │   └── css/              # Custom CSS files
│   ├── views.py              # Python code to render templates
│   ├── urls.py               # URL routing
│   └── models.py             # Database models (if any)
│
├── requirements.txt          # Python dependencies
└── manage.py                 # Django project management
```

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

---


