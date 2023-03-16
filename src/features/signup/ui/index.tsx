import React, { useEffect, useState } from 'react';
import {
  Button, DragDrop, Input, Typography,
} from 'shared/ui';
import { signup } from 'features/signup/api/signup';
import {
  getStorage, ref, uploadBytes, listAll,
} from 'firebase/storage';
import cls from './styles.module.scss';

const Component = () => {
  const [avatar, setAvatar] = useState<any>([]);
  const [avatarLink, setAvatarLink] = useState<any>('');
  const [firstname, setFirstName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [name_work, setNameWork] = useState<string>('');
  const [phone, setPhone] = useState<string>('+7');
  const [error, setError] = useState<boolean>(true);
  const [successSignup, setSuccessSignup] = useState<boolean>(false);
  const uploadAvatar = (evt: any) => {
    const { files } = evt.target;
    const data: any[] = [];
    for (let i = 0, f:any; (f = files[i]); i++) {
      const reader = new FileReader();

      reader.onload = function () {
        data.push(f);
        setAvatar([...avatar, ...data]);
      };
      reader.readAsText(f);
    }
  };

  const data = {
    phone,
    firstname,
    surname,
    name_work,
    avatar: avatarLink,
  };
  const storage = getStorage();
  const listRef = ref(storage, `avatars/${phone}`);
  listAll(listRef)
    .then((res) => {
      res.items.forEach((itemRef) => {
        console.log(itemRef);
      });
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });

  const fr = async () => {
    const rell = async () => {
      const storage = getStorage();
      const storageRef = ref(storage, `avatars/${phone}/${avatar[0].name}`);
      console.log(storageRef);
      await uploadBytes(storageRef, avatar[0]).then((snapshot) => {
        console.log(snapshot);
      });

      const listRef = ref(storage, `avatars/${phone}`);
      await listAll(listRef)
        .then((res) => {
          res.items.forEach((itemRef) => {
            console.log(itemRef.fullPath);
          });
        }).catch((error) => {
          // Uh-oh, an error occurred!
        });
    };
    const res = await rell();
  };

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    if (phone == '+7' || phone.length < 11 || surname == '' || firstname == '' || name_work == '') {
      setError(true);
    } else {
      setError(false);
    }
  }, [firstname, surname, phone]);
  const handleSignup = async () => {
    await fr();
    if (!error) {
      const authFunc = await signup(data);
      setSuccessSignup(true);
    }
  };
  return (
     <div className={cls.signup__wrapper}>
        <Input
          type='tel'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          max={12}
          min={12}
        />
        <Input
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder='Ваш имя'
        />
        <Input
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder='Ваш фамилия'
        />
        <Input
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder='Ваше место работы'
        />
        <DragDrop
          onChange={uploadAvatar}
          multiple={false}
          labelText='Загрузите аватарку'
          filesInfo={avatar}
        />
        <Button disabled={error} variant='xs' background='violet-primary' onClick={handleSignup}>
           <Typography variant='body'>Регистрация</Typography>
        </Button>
        {
         successSignup
           ? (
              <div>
                 <Typography color='violet-primary'>
                    Регистрация прошла успешно
                 </Typography>
              </div>
           )
           : null
       }
     </div>
  );
};

export const Signup = React.memo(Component);
