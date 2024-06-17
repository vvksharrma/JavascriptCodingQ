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

  function flattenObj(obj){
    let newObj={};
    for(let key in obj){
        if(typeof obj[key]=='object'){
            let flatObj=flattenObj(obj[key]);
            for(let key2 in flatObj){
                newObj[key+'_'+key2]=flatObj[key2];
            }
        }
        else{
            newObj[key]=obj[key];
        }
    }
    return newObj
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