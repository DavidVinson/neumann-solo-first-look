import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function Pets() {
  const dispatch = useDispatch();
  // Grab user data from redux store
  const user = useSelector((store) => store.user);
  const pets = useSelector((store) => store.pets);

  useEffect(() => {
    dispatch({ type: 'FETCH_PET' });
    //anytime a user navigates away from this page, the pets reducer is cleared.
    return () => dispatch({ type: 'CLEAR_PETS' });
  }, [dispatch]);

  return (
    <>
      {
        // If we have a `user.id` property, we know the user is
        // logged in.
        // Conditionally render a welcome message for the logged-in user
        user.id ? <h3>Welcome {user.username} To Your Pets List</h3> : <h3>No user logged in</h3>
      }

      {pets.length > 0 && (
        <ul>
          {pets.map((pet) => (
            <li key={pet.id}>{pet.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Pets;
