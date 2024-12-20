 

<h2><a href="https://github.com/yourusername/react-form-cards">React Form Cards</a></h2> <img src='https://img.shields.io/badge/Difficulty-Easy-brightgreen' alt='Difficulty: Easy' /><hr>

<p>This project is a React-based web application that allows users to submit and manage form data. Users can input details such as name, gender, department, and age, and view the data in either a card layout with flip animations or a table format. The application includes filtering options and persists data using <code>localStorage</code>.</p>

<p>&nbsp;</p>

<p><strong class="example">Features:</strong></p>

<ul>
	<li>User-friendly form for submitting data.</li>
	<li>Data persistence using <code>localStorage</code>.</li>
	<li>Interactive display modes: Card view with 3D flip animations and Table view.</li>
	<li>Filters for gender and department to refine displayed data.</li>
	<li>Bootstrap-based responsive design with custom CSS styling.</li>
</ul>

<p>&nbsp;</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> User enters the following:
{
  "name": "Mona",
  "gender": "Female",
  "department": "MERN dept",
  "age": "19"
}

<strong>Output (Card View):</strong>
Front:
Name: Mona
Gender: Female

Back:
Department: MERN dept
Age: 19
</pre>

<p>&nbsp;</p>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> User applies the filter: Gender = "Female".

<strong>Output (Table View):</strong>
| Name  | Gender | Department  | Age |
|-------|--------|-------------|-----|
| Mona  | Female | MERN dept   | 19  |
</pre>

<p>&nbsp;</p>

<p><strong>Constraints:</strong></p>

<ul>
	<li>Users must provide a valid name, gender, department, and age in the form.</li>
	<li>Filters are optional and can be used to refine the displayed data.</li>
	<li>The app is designed for use on modern web browsers with <code>localStorage</code> support.</li>
</ul>

<p>&nbsp;</p>

<p><strong>Installation:</strong></p>

<pre>
<strong>Step 1:</strong> Clone the repository.
<code>git clone https://github.com/yourusername/react-form-cards.git</code>

<strong>Step 2:</strong> Navigate to the project directory.
<code>cd react-form-cards</code>

<strong>Step 3:</strong> Install dependencies.
<code>npm install</code>

<strong>Step 4:</strong> Start the development server.
<code>npm start</code>
</pre>

<p>&nbsp;</p>

<p><strong>Technologies Used:</strong></p>

<ul>
	<li><strong>React:</strong> For building the user interface.</li>
	<li><strong>Bootstrap 5:</strong> For responsive design and styling.</li>
	<li><strong>CSS:</strong> For custom animations and styles.</li>
	<li><strong>localStorage:</strong> For persisting user data across sessions.</li>
</ul>

<p>&nbsp;</p>

---
 
