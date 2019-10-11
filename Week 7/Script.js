class Movie {
    constructor(title, director) {
      // add your code here
      this.title = title;
      this.director = director;
    }
  
    getTitle() {
      // add your code here
      return this.title
    }
  
    getDirector() {
      // add your code here
      return this.director
    }
  
    addStar(star) {
      // add your code here
      this.star = star;
    }
  
    getStars() {
      // add your code here
      return [this.star]
      
    }
  
    addWriter(writer) {
      // add your code here
      this.writer  = writer;
    }
  
    getWriters() {
      // add your code here
      return this.writer
    }
  
    addRating(rating) {
      // add your code here
      [this.rating = rating]
    }
    
    getAverageRating() {
      // add your code here
      return this.rating + 
    }
    AddRating() {
        this.rating = rating;
    }

  
    // ... Add yours :-) Look to IMDB for inspiration
  }
  
  class StaffMember {
    constructor(name, role, dateOfBirth) {
      // add your code here
      this.name = name;
      this.role = role;
      this.dateOfBirth = dateOfBirth;
    }
  
    addMovie(movie) {
      // add your code here
      this.movie = movie;
    }
  
    getName() {
      // add your code here
      return this.name;
    }
  
    getRole() {
      // add your code here

    }
  
    getAge() {
      // add your code here
    }
  }
  
  // Pick your favorite movie from http://www.imdb.com/
  
  const myMovie = new Movie(...);
  
  const firstActor = new StaffMember(...);
  myMovie.addStar(firstActor);
  // create and add more staff members
  
  // Make sure that the following actions work.
  console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
  const director = myMovie.getDirector();
  console.log(`Director: ${director.getName()}`);












