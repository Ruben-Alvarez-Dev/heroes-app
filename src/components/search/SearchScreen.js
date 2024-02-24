import { useNavigate } from 'react-router-dom';

import {useForm} from '../../hooks/useForm';
import { HeroCard } from '../hero/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = () => {
  
  const navigate = useNavigate();

  const [formValues, handleInputChange] = useForm({
    searchText: '',
  });

  const { searchText } = formValues;
  const heroesFiltered = getHeroByName("batman")
    
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
    navigate(`?q=${searchText}`) 
  }
  

  return (
    <>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              onChange={handleInputChange}
            />
            <button
              type="submit"
              onClick={handleSearch}
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            heroesFiltered.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            
            ))
          }
        </div>
      </div>
      
    </>
  );
};
