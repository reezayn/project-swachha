import Sidebar from '../components/Sidebar'
import sus1 from '../assets/sus1.gif'
import sus2 from '../assets/sus2.jpg'
import sus3 from '../assets/sus3.jpg'
import sus4 from '../assets/sus4.jpeg'
import sus5 from '../assets/sus5.jpg'
import sus6 from '../assets/sus6.jpg'
import sus7 from '../assets/sus7.jpg'

const Suspects = () => {
  const suspectsArr = [
    {
      id: 1,
      photo: sus1,
      date: '2023-05-05',
    },
    {
      id: 2,
      photo: sus2,
      date: '2023-05-05',
    },
    {
      id: 3,
      photo: sus3,
      date: '2023-05-05',
    },
    {
      id: 4,
      photo: sus4,
      date: '2023-05-05',
    },
    {
      id: 5,
      photo: sus5,
      date: '2023-05-05',
    },
    {
      id: 6,
      photo: sus6,
      date: '2023-05-05',
    },
    {
      id: 7,
      photo: sus7,
      date: '2023-05-05',
    },
  ]
  return (
    <>
      <div className="flex w-full h-screen overflow-y-hidden">
        <div className="w-[18%]">
          <Sidebar />
        </div>
        <div className="w-[50%] px-5 h-screen ">
          <h1 className='my-4 text-3xl'>Suspects List</h1>
          <div className='h-full overflow-y-scroll'>
            <div className="flex w-full py-5 border-b-2 border-gray-300 dark:border-gray-500">
              <div className="w-[20%] mx-5 text-start">S.N</div>
              <div className="w-[30%] mx-5 text-center">Date</div>
              <div className="w-[50%] mx-5 text-center">Photo</div>
            </div>
            {suspectsArr.map(({ id, photo, date }) => (
              <div
                key={id}
                className="flex items-center w-full py-3 border-gray-300 dark:border-gray-500"
              >
                <div className="w-[20%] mx-5 text-start">{id}</div>
                <div className="w-[30%] mx-5 text-center">{date}</div>
                <div className="w-[50%] mx-5 flex justify-center">
                  <a target="_blank" href={photo}>
                    <img
                      className="h-20 w-28 rounded-xl"
                      src={photo}
                      alt="sus"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Suspects
