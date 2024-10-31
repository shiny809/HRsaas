import request from '@/utils/request'
/* 获取 角色信息列表 */
export function getRoleList(params) {
  return request({
    url: '/sys/role',
    params
  })
}

// 获取公司信息
export function getCompanyInfo(companyId) {
  return request({
    url: `/company/${companyId}`
  })
}

/* 删除角色功能 */
export function deleteRole(id) {
  return request({
    method: 'delete',
    url: `/sys/role/${id}`
  })
}
/**
 * 读取角色详情***/
export function getRoleDetail(id) {
  return request({
    url: `/sys/role/${id}`
  })
}

/**
 * 更新角色详情***/
export function updateRole(data) {
  return request({
    url: `/sys/role/${data.id}`,
    method: 'put',
    data
  })
}

/* 新增角色功能 */
export function addRole(data) {
  return request({
    method: 'post',
    url: '/sys/role',
    data
  })
}
