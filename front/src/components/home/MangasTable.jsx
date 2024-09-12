import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const mangasTable = ({ mangas }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>N°</th>
          <th className='border border-slate-600 rounded-md'>Title</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Author
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Genre
          </th>
          <th className='border border-slate-600 rounded-md'>Publish Year</th>
          <th className='border border-slate-600 rounded-md'>Description</th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {mangas.map((manga, index) => (
          <tr key={manga._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {manga.title}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {manga.author}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {manga.genre}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {manga.publishYear}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {manga.description}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/mangas/details/${manga._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/mangas/edit/${manga._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/mangas/delete/${manga._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default mangasTable;