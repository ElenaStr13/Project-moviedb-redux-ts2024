import css from './UserInfo.module.css'

const UserInfo = () => {
    return (
        <div className={css.user}>
            <img src='./avatar.jpg' alt='photo'/>
        </div>
    );
};

export {UserInfo};