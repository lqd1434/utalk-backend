import React from 'react'
import styles from './index.module.scss'
import { Avatar, BuildIcon, ChartIcon, CubeIcon, HomeIcon, Pane, ShieldIcon, Text } from 'evergreen-ui'
import SideBarCell from '../SideBarCell'

const SideBar = () => {
	return (
		<>
			<Pane className={styles.sideBar} userSelect={'none'}>
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
				<SideBarCell text={'管理员'} route={'/u/adminManage'} Icon={<ShieldIcon marginRight={10} />} />
				<SideBarCell text={'微应用'} route={'/u/appList'} Icon={<CubeIcon marginRight={10} />} />
			</Pane>
		</>
	)
}

export default SideBar
