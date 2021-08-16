import React from 'react'
import styles from './index.module.scss'
import { Avatar, BuildIcon, ChartIcon, HomeIcon, LockIcon, Pane, Text } from 'evergreen-ui'
import SideBarCell from '../SideBarCell'

const SideBar = () => {
	return (
		<>
			<div className={styles.sideBar}>
				<Pane>
					<Avatar name={'Utalk'} size={70} marginLeft={90} marginTop={20} marginBottom={10} />
				</Pane>
				<Pane display={'flex'} justifyContent="center" alignItems="center" marginBottom={50}>
					<Text size={600} textAlign={'center'}>
						管理系统
					</Text>
				</Pane>
				<SideBarCell text={'首页'} route={'/u/home'} Icon={<HomeIcon marginRight={10} />} />
				<SideBarCell text={'统计数据'} route={'/u/statistics'} Icon={<BuildIcon marginRight={10} />} />
				<SideBarCell text={'用户列表'} route={'/u/userList'} Icon={<ChartIcon marginRight={10} />} />
				<SideBarCell text={'权限管理'} Icon={<LockIcon marginRight={10} />} />
			</div>
		</>
	)
}

export default SideBar
