const school = {
    name: 'Oakridge High School',
    location: 'New York',
    departments: {
      science: {
        head: 'Dr. Smith',
        classrooms: 5,
        subjects: ['Physics', 'Chemistry', 'Biology']
      },
    },
    facilities: {
      library: {
        name: 'Oakridge Library',
        sections: ['Fiction', 'Non-fiction', 'Reference']
      },
      sportsComplex: {
        name: 'Oakridge Sports Complex',
        facilities: ['Gymnasium', 'Swimming Pool', 'Basketball Court']
      }
    }
  };

  function flattenObj(obj) {
    // Initialize a new empty object to hold the flattened key-value pairs
    let newObj = {};
    
    // Iterate over each key in the input object
    for (let key in obj) {
        // Check if the value corresponding to the current key is an object
        if (typeof obj[key] == 'object') {
            // Recursively call flattenObj on the nested object to flatten it
            let flatObj = flattenObj(obj[key]);
            
            // Iterate over each key in the flattened nested object
            for (let key2 in flatObj) {
                // Construct a new key by combining the current key and the key from the flattened object, separated by an underscore
                newObj[key + '_' + key2] = flatObj[key2];
            }
        } else {
            // If the value is not an object, simply add it to the new object
            newObj[key] = obj[key];
        }
    }
    
    // Return the newly constructed flattened object
    return newObj;
}

console.log(flattenObj(school));
  //output
//   {
//     name: 'Oakridge High School',
//     location: 'New York',
//     departments_science_head: 'Dr. Smith',
//     departments_science_classrooms: 5,
//     departments_science_subjects_0: 'Physics',
//     departments_science_subjects_1: 'Chemistry',
//     departments_science_subjects_2: 'Biology',
//     facilities_library_name: 'Oakridge Library',
//     facilities_library_sections_0: 'Fiction',
//     facilities_library_sections_1: 'Non-fiction',
//     facilities_library_sections_2: 'Reference',
//     facilities_sportsComplex_name: 'Oakridge Sports Complex',
//     facilities_sportsComplex_facilities_0: 'Gymnasium',
//     facilities_sportsComplex_facilities_1: 'Swimming Pool',
//     facilities_sportsComplex_facilities_2: 'Basketball Court'
//   }