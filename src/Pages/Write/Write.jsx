import SideBar from '../../Components/Sidebar/SideBar';
import './write.css';

function Write() {
	return (
		<div className='writeconteiner'>
			<div className='writee'>
				<img
					className='writeimg'
					src='https://c4.wallpaperflare.com/wallpaper/946/632/921/espacio-estrellas-naturaleza-planetas-wallpaper-preview.jpg'
					alt='img'
				/>
				<form action='' className='writeform'>
					<div className='writetitle'>
						<label htmlFor='fileid'>
							<i className="fas fa-plus"></i>
						</label>
						<input id='fileid' type='file' style={{ display: 'none' }} />
						<input
							type='text'
							className='writeinput'
							autoFocus={true}
							placeholder='Title'
						/>
					</div>
					<textarea
						className='writearea'
						name=''
						id=''
						cols='30'
						rows='10'
						placeholder='Tell your story...'
					></textarea>
					<br />
					<button className='writebutton2' type='submit'>
						Publish
					</button>
				</form>
			</div>
			<SideBar />
		</div>
	);
}

export default Write;
